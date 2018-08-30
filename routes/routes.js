const {
    cliente,
    empleado,
    laboratorio,
    resultado,
    procedimiento,
    cita
} = require('../conexion')
jwt = require('jsonwebtoken');

module.exports = function (app) {
    // create a user

    app.get("/", (req, res) => {
        res.render('inicio');
    });
    app.get("/inicio", (req, res) => {
        res.render('inicio');
    });
    app.get("/citas", (req, res) => {
        res.render('citas');
    });
    app.get("/banco_sangre", (req, res) => {
        res.render('banco_sangre');
    });
    app.get("/contactenos", (req, res) => {
        res.render('contactenos');
    });
    app.get("/hematologia", (req, res) => {
        res.render('hematologia');
    });
    app.get("/servicios", (req, res) => {
        res.render('servicios');
    });
    app.get("/inmunologia", (req, res) => {
        res.render('inmunologia');
    });
    app.get("/microbiologia", (req, res) => {
        res.render('microbiologia');
    });
    app.get("/parasitologia", (req, res) => {
        res.render('parasitologia');
    });
    app.get("/quimica", (req, res) => {
        res.render('quimica');
    });
    app.get("/resultados", (req, res) => {
        resultado.findAll().then(function (resul) {
            console.log(resul)
            res.render('resultados', {
                message: resul[0].nombre_resultado
            });
        });
    });
    app.get("/mujeres", (req, res) => {
        res.render('mujeres');
    });
    app.get("/ninos", (req, res) => {
        res.render('ninos');
    });
    app.get("/familiar", (req, res) => {
        res.render('familiar');
    });
    app.get("/tercera_edad", (req, res) => {
        res.render('tercera_edad');
    });
    app.get("/hombres", (req, res) => {
        res.render('hombres');
    });
    app.get("/maternas", (req,
        res) => {
        res.render('maternas');
    });
    app.get("/quienes_somos", (req, res) => {
        res.render('quienes_somos');
    });
    app.get("/iniciar_registrar", (req, res) => {
        res.render('iniciar_registrar');
    });
    // // ------------------------------------middleware ejemplo---------------------------------------------------------
    // var requesttime= function(req,res,next){
    //     req.requesttime= Date.now();
    //     next();
    // };
    // app.use(requesttime);
    // }
    // app.get("/iniciar_registrar", function (req, res , next) {
    //     var response = "hello word"
    //     response += 'Requested at'+ req.requesttime; 
    //     res.send(response);
    // });

    // // ------------------------------------ fin -----------------------------------------------------------------

    // // ------------------- pedir cita-----------------
    app.post("/citas", function (req, res) {
        let Fk_cliente = req.body.Fk_cliente;
        let Tipo_cita = req.body.Tipo_cita;
        let Observacion = req.body.Observacion;
        let id = req.body.Id;
        cita.create({
            fk_cliente: Fk_cliente,
            tipo_cita: Tipo_cita,
            observacion: Observacion
        }).then(function (val) {
            res.send(val);
        })
    });
    // <------------REGISTRESE--------------------------->
    app.post('/registro_cliente', (req, res) => {
        var Nombre_cliente = req.body.Nombre_cliente;
        var Tipo_cedula_cliente = req.body.Tipo_cedula_cliente;
        var Cedula_cliente = req.body.Cedula_cliente;
        var Telefono_cliente = req.body.Telefono_cliente;
        var Categoria_cliente = req.body.Categoria_cliente;
        var Email_cliente = req.body.Email_cliente;
        var Contraseña_cliente = req.body.Contraseña_cliente;
        cliente.create({
            nombre_cliente: Nombre_cliente,
            tipo_cedula_cliente: Tipo_cedula_cliente,
            cedula_cliente: Cedula_cliente,
            telefono_cliente: Telefono_cliente,
            categoria_cliente: Categoria_cliente,
            email_cliente: Email_cliente,
            contraseña_cliente: Contraseña_cliente
        }).then(function (val) {
            res.send(val);
        })
    });

    // <------------INICIE--------------------------->
    app.post('/inicio_cliente', (req, res) => {

        let user = {
            Email_cliente : req.body.Email_cliente,
            Contraseña_cliente : req.body.Contraseña_cliente
        };

        cliente.findAll({
            where: {
                email_cliente: user.Email_cliente,
                contraseña_cliente: user.Contraseña_cliente
            }

        }).then(function (response) {
            console.log(user);

            let token = jwt.sign({
                user: response
            }, 'secret');

            if (response.length > 0) {

                res.json({
                    estado: true,
                    token: token

                })

            } else {

                res.json({
                    estado: false
                })

            }

        });
    });
}
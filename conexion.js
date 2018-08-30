const Sequelize = require('sequelize');
const CLienteModel = require('./models/cliente');
const EmpleadoModel = require('./models/empleado');
const Laboratorio_MedicoModel = require('./models/laboratorio_medico');
const ProcedimientoModel = require('./models/procedimiento');
const ResultadoModel = require('./models/resultado');



const sequelize = new Sequelize('BdLaboratorioClinico', 'postgres', 'ceresanserma2018', {
    dialect: 'postgres',
});

const cliente = CLienteModel(sequelize, Sequelize)
const empleado = EmpleadoModel(sequelize, Sequelize)
const laboratorio = Laboratorio_MedicoModel(sequelize, Sequelize)
const procedimiento = ProcedimientoModel(sequelize, Sequelize)
const resultado = ResultadoModel(sequelize, Sequelize)
procedimiento.hasMany(laboratorio) // se crea la llave foranea de 1 a muchos 1 :n 
empleado.belongsTo(laboratorio)
const cita = sequelize.define("cita", {
    id_cita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_hora: {
        type: Sequelize.DATE
    },
    observacion: {
        type: Sequelize.STRING
    },
    estado_cita: {
        type: Sequelize.BOOLEAN,
        allowNull: false //para que el campo no se permita vacio
    },
    tipo_cita: {
        type: Sequelize.STRING
    },
    fk_procedimiento: {
        type: Sequelize.INTEGER,
        references: {
            model: "procedimiento",
            key: "id_procedimiento"
        }
    },
    fk_empleado: {
        type: Sequelize.INTEGER,
        references: {
            model: "empleado",
            key: "id_empleado"
        }
    },
    fk_cliente: {
        type: Sequelize.INTEGER,
        references: {
            model: "cliente",
            key: "id_cliente"
        }
    },
    fk_resultado: {
        type: Sequelize.INTEGER,
        references: {
            model: "resultado",
            key: "id_resultado"
        }
    },
})

sequelize.sync({
        force: false
    })
    .then(() => {
        console.log('Datebase & tablets created')
    })

module.exports = {
    cliente,
    empleado,
    laboratorio,
    resultado,
    procedimiento,
    cita
}

// laboratorio.create({
//     nombre_laboratorio: 'laboratorio diaz',
//     telefono_laboratorio: '887',
//     email_laboratorio: "contactenos@ld.com"

// })

// cliente.create({
//     nombre_cliente: 'andres diaz',
//     tipo_cedula_cliente: 'extranjera',
//     telefono_cliente: '88677',
//     email_cliente: "contactenos@gmail.com",
//     cedula_cliente: "1059709494",
//     categoria_cliente: "2",
//     contraseña_cliente: "admin"

// })
// empleado.create({
//     nombre_empleado: 'andres diaz',
//     telefono_empleado: '88677',
//     email_empleado: "contactenos@gmail.com",
//     cedula_empleado: "1059709494",
//     categoria_empleado: "2",
//     contraseña_empleado: "admin"

// })
// procedimiento.create({
//     nombre_procedimiento: 'andres diaz',
//     categoria_procedimiento: "2"
// })
// resultado.create({
//     nombre_resultado: 'andres diaz',
//     categoria_resultado: "2" ,
//     link_resultado: "www.fdf.com"
// })
// Post.findAll({
//     where: {
//         authorId: 12,
//         status: 'active'
//     }
// })
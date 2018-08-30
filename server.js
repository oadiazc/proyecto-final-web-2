var routes = require("./routes/routes");
function iniciar(app) {
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port' + server.address().port);
        //const{ cliente, empleado, laboratorio,resultado,procedimiento } = require('./conexion')
        routes(app);
    });
}

exports.iniciar = iniciar;
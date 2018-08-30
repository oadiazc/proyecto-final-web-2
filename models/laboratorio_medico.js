module.exports = (sequelize, type) => {
    return sequelize.define('laboratorio_medico', {
        id_laboratorio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_laboratorio: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        telefono_laboratorio: {
            type: type.INTEGER,
        },
        email_laboratorio: {
            type: type.STRING
        },
    }, {
        tableName: 'laboratorio_medico'
    });
}
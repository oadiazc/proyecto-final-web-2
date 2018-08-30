module.exports = (sequelize, type) => {
    return sequelize.define('empleado', {
        id_empleado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cedula_empleado: {
            type: type.BIGINT,
            allowNull: false
        },
        nombre_empleado: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        telefono_empleado: {
            type: type.BIGINT,
        },
        email_empleado: {
            type: type.STRING
        },
        categoria_empleado: {
            type: type.STRING,
            allowNull: false
        },
        contraseña_empleado: {
            type: type.STRING,
            allowNull: false
        }
    }, {
        tableName: 'empleado'
    });
}
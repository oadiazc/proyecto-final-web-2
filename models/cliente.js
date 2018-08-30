module.exports = (sequelize, type) => {
    return sequelize.define('cliente', {
        id_cliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_cedula_cliente: {
            type: type.STRING,
            allowNull: false 
        },
        cedula_cliente: {
            type: type.BIGINT,
            allowNull: false
        },
        nombre_cliente: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        telefono_cliente: {
            type: type.BIGINT
        },
        email_cliente: {
            type: type.STRING
        },
        categoria_cliente: {
            type: type.STRING,
            allowNull: false
        },
        contraseña_cliente: {
            type: type.STRING,
            allowNull: false
        },
    }, {
        tableName: 'cliente'
    });
}
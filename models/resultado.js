module.exports = (sequelize, type) => {
    return sequelize.define('resultado', {
        id_resultado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_resultado: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        categoria_resultado: {
            type: type.STRING
        },
        link_resultado: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
    }, {
        tableName: 'resultado'
    });
}
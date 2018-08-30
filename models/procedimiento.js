module.exports = (sequelize, type) => {
    return sequelize.define('procedimiento', {
        id_procedimiento: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_procedimiento: {
            type: type.STRING,
            allowNull: false //para que el campo no se permita vacio
        },
        categoria_procedimiento: {
            type: type.STRING
        }
    
    }, {
        tableName: 'procedimiento'
    });
}
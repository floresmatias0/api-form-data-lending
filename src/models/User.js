const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        monto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cuotas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
};
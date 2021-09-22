const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quotes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
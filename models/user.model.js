const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbConnect');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = user;
const {DataTypes} = require('sequelize');
const sequelize = require('../services/dbConnect')

const product = sequelize.define('productt', {
    productid: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },

    pname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    price: {
        type: DataTypes.DECIMAL(10,2)
    }
})
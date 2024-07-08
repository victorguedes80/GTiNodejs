const {DataTypes} = require('sequelize');
const sequelize = require('../services/dbConnect');

//definição do modelo do produto
const product = sequelize.define('product', {
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
});


module.exports = product;
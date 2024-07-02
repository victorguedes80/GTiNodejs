const {DataTypes} = require('sequelize');
const sequelize = require('../services/dbConnect')

const purchase = sequelize.define('purchase', {
    purchaseid: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    buyerid: {
        type: DataTypes.INTEGER,
        references: {
            model: user,
            key: "id"
        }
    },
    sellerid: {
        type: DataTypes.INTEGER,
        references: {
            model: user,
            key: "id"
        }
    },
    productid: {
        type: DataTypes.INTEGER,
        references: {
            model: product,
            key: "productid"
        }
    }

})
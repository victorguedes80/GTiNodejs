const {DataTypes} = require('sequelize');
const sequelize = require('../services/dbConnect');
const user = require('../models/user.model');
const product = require('../models/product.model');


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

});

purchase.belongsTo(user, { as: 'Buyer', foreignKey: 'buyerid' });
purchase.belongsTo(user, { as: 'Seller', foreignKey: 'sellerid' });
purchase.belongsTo(product, { foreignKey: 'productid' });

user.hasMany(purchase, { as: 'PurchasesAsBuyer', foreignKey: 'buyerid' });
user.hasMany(purchase, { as: 'PurchasesAsSeller', foreignKey: 'sellerid' });
product.hasMany(purchase, { foreignKey: 'productid' });


module.exports = purchase;
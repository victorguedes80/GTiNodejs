const sequelize = require('sequelize');

const db = new sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'KingLotus',
    database: 'capacitacao'
})

module.exports = db;
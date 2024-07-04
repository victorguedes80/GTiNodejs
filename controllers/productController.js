const dbAccess = require('../services/dbAccess');
const model = require('../models/product.model');
const sequelize = require('../services/dbConnect');
const {QueryTypes} = require('sequelize');


class productController{
   async create(req, res){   
        try{
            const body = req.body;
            const result = await dbAccess.create(model, body);
            if(result) return res.status(200).json({msg:'produto inserido com sucesso!'});
            else res.status(500).json({msg: 'server internal error!'});
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'server internal error!'});
        }
    }
    async read(req, res){
        try{
            const result = await dbAccess.read(model);
            if(result) return res.status(200).json(result);
            else res.status(404).json({msg: "produtos indisponíveis!"});
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'server internal error!'});
        }

    }
    async readClause(req, res){
        try{
            const clause = req.body;
            const result = await dbAccess.readClause(model, clause.field, clause.key);
            if(result) return res.status(200).json(result);
            else res.status(404).json({msg: "produto não encontrado!"});
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'server internal error!'});
        }
    }
    async update(req, res){
        try{
            const body = req.body;
            console.log(body);
            const clause = body.clause;
            console.log(clause);
            const newValues = body.newValues;
            const result = await dbAccess.update(model, clause.field, clause.key, newValues);
            if(result) return res.status(200).json({msg: "atualizado com sucesso!"});
            else res.status(404).json({msg: "produto não atualizado!"});
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'server internal error!'});
        }
    }
    async delete(req, res){
        try{
            const clause = req.body;
            const result = await dbAccess.delete(model, clause.field, clause.key);
            if(result) return res.status(200).json({msg: "produto excluído com sucesso!"});
            else return res.status(500).json({msg: 'server internal error!'});
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'server internal error!'});
        }
    }
    async sales(req, res){
        const productid = req.body.productid;
        const query = `
            SELECT COUNT(*) AS numero_de_vendas
            FROM purchases 
            WHERE productid = :productid
        `;
        try {
            const [sales] = await sequelize.query(query, {
                replacements: {productid: productid},
                type: QueryTypes.SELECT,
            });
            if(sales) return res.status(200).json(sales);
            else return res.status(500).json({msg: 'server internal error!'});

            }catch(err) {
                console.log(err);
                return res.status(500).json({msg: 'server internal error!'});
            }
    }
    async profit(req, res){
        const productid = req.body.productid;

        const salesQuery = `
            SELECT COUNT(*) AS numero_de_vendas
            FROM purchases 
            WHERE productid = :productid
        `;

        const priceQuery = `
            SELECT price
            FROM products 
            WHERE productid = :productid
        `;

        try {
            const [salesResult] = await sequelize.query(salesQuery, {
                replacements: {productid: productid},
                type: QueryTypes.SELECT,
            });
            const [priceResult] = await sequelize.query(priceQuery, {
                replacements: {productid: productid},
                type: QueryTypes.SELECT,
            });

            const sales = salesResult.numero_de_vendas;
            const price = priceResult.price;

            const profit = (sales*price).toFixed(2);
            
            if(profit)return res.status(200).json({"valor_do_lucro": profit});
            else return res.status(500).json({msg: 'server internal error!'});

            }catch(err) {
                console.log(err);
                return res.status(500).json({msg: 'server internal error!'});
            }
    }
}

module.exports = new productController();
const dbAccess = require('../services/dbAccess');
const model = require('../models/purchase.model');

class purchaseController{
    async create(req, res){   
         try{
             const body = req.body;
             const result = await dbAccess.create(model, body);
             if(result) return res.status(200).json({msg:'compra realizada com sucesso!'});
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
             else res.status(404).json({msg: "compras indisponíveis!"});
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
             else res.status(404).json({msg: "compra não encontrado!"});
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
             if(result) return res.status(200).json({msg: "compra atualizada com sucesso!"});
             else res.status(404).json({msg: "compra não atualizada!"});
         }catch(err){
             console.log(err);
             return res.status(500).json({msg: 'server internal error!'});
         }
     }
     async delete(req, res){
         try{
             const clause = req.body;
             const result = await dbAccess.delete(model, clause.field, clause.key);
             if(result) return res.status(200).json({msg: "compra excluída com sucesso!"});
             else return res.status(500).json({msg: 'server internal error!'});
         }catch(err){
             console.log(err);
             return res.status(500).json({msg: 'server internal error!'});
         }
     }
 }
 
 module.exports = new purchaseController();
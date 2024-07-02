const dbAccess = require('../services/dbAccess');
const model = require('../models/product.model');

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
}

module.exports = new productController();
class dbAccess{
    async create(module, obj){
        try{
            await module.create(obj);
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }
    async read(module){
        try{
            const result = await module.findAll();
            if(result){
                return result;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }
    async readClause(module, field, key){
        const whereClause = {};
        whereClause[field] = key;
        try{
            const result = await module.findAll({
                where: whereClause
            });
            if(result){
                return result;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }
    async update(module, field, key, newValues){
        const whereClause = {};
        whereClause[field] = key;
        try{
            const result = await module.update(newValues, {
                where: whereClause
            })
            if(result) return true;
            else return false;
        }catch(err){
            console.log(err);
            return false;
        }
    }
    async delete(module, field, key){
        const whereClause = {};
        whereClause[field] = key;
        try{
            const result = await module.destroy({
                where: whereClause
            })
            if(result) return true;
            else return false;
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

module.exports = new dbAccess();
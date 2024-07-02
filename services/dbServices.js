async function dbConnect(){
    try{
        const db = require('./dbConnect');
        await db.sync();
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;
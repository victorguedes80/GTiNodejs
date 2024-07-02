class messageController{
    showReq(req, res){
        try{
            console.log(req);
        }catch(err){
            console.log(err);
        }
    }
    showBody(req, res){
        try{
            const body = req.body;
            console.log(body);
        }catch(err){
            console.log(err);
        }
    }
    validLogin(req, res){
        try{
            const body = req.body;
            if(body.username == 'john' && body.senha == 'abc123') return res.status(200).json({msg: 'login com sucesso!'});
            else return res.status(400).json({msg: 'senha ou usuário invalido!'});
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'erro interno do servidor!'});
        }
    }
}

module.exports = new messageController();
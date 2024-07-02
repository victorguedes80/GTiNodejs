const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const database = require('./services/dbServices');
const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.listen('8080');
console.log('the server is running on port 8080');

database().then(()=>{
    console.log('conectado ao banco!');
}).catch(err => {
    console.log(err);
})
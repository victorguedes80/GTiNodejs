const express = require('express');
const router = express.Router();
const mController = require('./controllers/messageController');
const uController = require('./controllers/userController');
const prControler = require('./controllers/productController');

router.get('/', (req, res)=>{console.log("o / foi acessado!")});
router.get('/showReq', mController.showReq);
router.post('/showBody', mController.showBody);
router.post('/login', mController.validLogin);
router.post('/createUser', uController.create);
router.get('/getUser', uController.read);
router.post('/getClause', uController.readClause);
router.post('/updateUser', uController.update);
router.delete('/deleteUser', uController.delete);

router.post('/createProduct', prControler.create);

module.exports = router;

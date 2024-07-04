const express = require('express');
const router = express.Router();
const mController = require('./controllers/messageController');
const uController = require('./controllers/userController');
const prController = require('./controllers/productController');
const puController = require('./controllers/purchaseController');

router.get('/', (req, res)=>{console.log("o / foi acessado!")});
router.get('/showReq', mController.showReq);
router.post('/showBody', mController.showBody);
router.post('/login', mController.validLogin);

router.post('/createUser', uController.create);
router.get('/getUser', uController.read);
router.post('/getClause', uController.readClause);
router.post('/updateUser', uController.update);
router.delete('/deleteUser', uController.delete);

router.post('/createProduct', prController.create);
router.get('/getProduct', prController.read);
router.post('/getProductClause', prController.readClause);
router.post('/updateProduct', prController.update);
router.delete('/deleteProduct', prController.delete);

router.post('/createPurchase', puController.create);
router.get('/getPurchase', puController.read);
router.post('/getPurchaseClause', puController.readClause);
router.post('/updatePurchase', puController.update);
router.delete('/deletePurchase', puController.delete);

router.post('/userSpending', uController.userSpending);

module.exports = router;

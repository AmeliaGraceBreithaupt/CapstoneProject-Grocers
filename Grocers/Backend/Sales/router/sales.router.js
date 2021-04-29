let express = require('express');
let router = express.Router(); //router reference
let SalesController = require("../controller/sales.controller.js");

router.get('/getUserPurchasedDetails/:pid', SalesController.getUserPurchaseDetails);
router.get('/getProductPurchasedDetails/:product', SalesController.getProductPurchaseDetails);
router.get('/getDatePurchasedDetails/:date', SalesController.datePurchased);
router.get('/twoDatesPurchased/:date/:date2', SalesController.twoDatesPurchaseed);

module.exports=router;
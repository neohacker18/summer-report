const express = require("express");

const router = express.Router();
const adminController= require('../controllers/admin')

router.post('/add-product',adminController.postAddProduct)

router.post('/delete-product',adminController.postDeleteProduct)

module.exports = router;
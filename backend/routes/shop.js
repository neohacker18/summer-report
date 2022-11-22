const express = require("express");

const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/products/:category", shopController.getProducts);

module.exports = router;

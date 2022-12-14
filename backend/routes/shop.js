const express = require("express");

const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/products/:category", shopController.getProducts);

router.get("/product/:prodId", shopController.getProduct);

router.get("/cart/:id", shopController.getCart);

router.post("/cart", shopController.postCart);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

module.exports = router;

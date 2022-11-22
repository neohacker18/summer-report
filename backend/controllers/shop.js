const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.find().then((products) => {
    console.log(products);
    res
      .json({
        prods: products,
        pageTitle: "All Products",
        redirectTo: "/",
      })
      .catch((err) => {
        res.json({ errorMessage: err });
      });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      res.json({
        product: product,
        pageTitle: product.title,
        redirectTo: "/products",
      });
    })
    .catch((err) => {
      res.json({
        errorMessage: err,
      });
    });
};

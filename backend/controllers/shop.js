const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const category = req.params.category.split("=")[1];
  Product.find({ category: category })
    .then((products) => {
      console.log(products);
      res.json({ message: "Success", products: products });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  console.log(req.params)
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

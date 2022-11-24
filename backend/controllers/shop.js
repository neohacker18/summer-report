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
  console.log(req.params);
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

exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items;
      res.json({
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
      //basically reload the page
      res.json({ redirectTo: "/cart" });
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then((result) => {
      //basically reload the page
      res.json({ redirectTo: "/cart" });
    })
    .catch((err) => console.log(err));
};

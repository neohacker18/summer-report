const Product = require("../models/product");
const User = require("../models/user");

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
  console.log(req.params.id);
  const userId = req.params.id.split("=")[1];
  User.findById(userId)
    .then((user) => {
      user.populate("cart.items.productId").then((user) => {
        const products = user.cart.items;
        res.json({ products: products });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCart = (req, res, next) => {
  const userId = req.body.userId;
  const prodId = req.body.productId;
  const option = req.body.option;
  console.log(prodId)
  User.findById(userId)
    .then((user) => {
      Product.findById(prodId)
        .then((product) => {
          console.log(product);
          if (option === "Add") {
            user.addToCart(product);
          } else {
            user.reduceFromCart(product);
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const userId = req.body.userId;
  const prodId = req.body.productId;
  User.findById(userId)
    .then((user) => {
      user
        .removeFromCart(prodId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

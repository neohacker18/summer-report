const Product = require("../models/product");
const mongoDB = require("mongodb");

exports.postAddProduct = (req, res, next) => {
  const brand = req.body.brand;
  const title = req.body.title;
  const size = req.body.size;
  const price = req.body.price;
  const description = req.body.description;
  const category = req.body.category;
  const imageUrl = req.body.imageUrl;
  const product = new Product({
    brand: brand,
    title: title,
    size: size,
    price: price,
    imageUrl: imageUrl,
    description: description,
    category: category,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      console.log("Created Product");
      res.json({ message: "Success" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Try again" });
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.deleteOne({ _id: prodId })
    .then((result) => {
      console.log(result);
      console.log(`Product with id ${prodId} deleted successfully`);
      res.json({ message: "Deleted Successfully!" });
    })
    .catch((err) => {
      console.log(err);
    });
};

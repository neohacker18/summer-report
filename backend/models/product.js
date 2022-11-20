const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: {
    type:String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  prodId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
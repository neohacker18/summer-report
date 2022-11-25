const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const MONGODB_URI =
  "mongodb+srv://nayra:26092002aS@cluster0.vcsddvj.mongodb.net/?retryWrites=true&w=majority";

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(8000);
  })
  .catch((err) => console.log(err));

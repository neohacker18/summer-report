const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://nayra:26092002aS@cluster0.vcsddvj.mongodb.net/?retryWrites=true&w=majority";

const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");

app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true
}));
app.use(express.json());


app.use(express.urlencoded({ extended: false }));

app.use(shopRoutes);
app.get("/message",(req,res,next)=>{
  res.json({message: "You successfully signed up!"})
})
app.use(authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to Mongodb')
    app.listen(8000);
  })
  .catch((err) => console.log(err));

const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.getSignup = (req, res, next) => {
  return res.redirect("http://127.0.0.1:5173/signup");
};

exports.getLogin = (req, res, next) => {
  return res.redirect("http://127.0.0.1:5173/login");
};

exports.postLogin = (req, res, next) => {
  console.log("login called");
  const email = req.body.email;
  const password = req.body.password;
  let errorMessage;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        errorMessage = "User does not exist with the given email id.";
      }
      const doMatch = password === user.password;
      if (doMatch) {
        console.log("password matched");
        res.json({ redirectTo: "/" });
      } else {
        errorMessage = "Invalid email or password.";
      }
    })
    .catch((err) => {
      res.json({dummy: 'dummy',errorMessage: errorMessage});
      console.log(err);
    });
};

exports.postSignup = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  let errorMessage;
  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        errorMessage = "User found with the same id!";
        throw new Error(errorMessage);
      } else {
        const user = new User({
          name: name,
          email: email,
          password: password,
          cart: { items: [] },
        });
        console.log("User created");
        return user.save();
      }
    })
    .then(() => {
      res.json({ redirectTo: "/login", errorMessage: errorMessage });
    })
    .catch((err) => {
      res.json({ errorMessage: errorMessage });
      console.log(err);
    });
};

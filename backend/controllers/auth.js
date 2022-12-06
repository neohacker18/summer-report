const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.getSignup = (req, res, next) => {
  return res.redirect("http://127.0.0.1:5173/signup");
};

exports.getLogin = (req, res, next) => {
  return res.redirect("http://127.0.0.1:5173/login");
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let errorMessage;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        errorMessage = "User does not exist with the given email id.";
      }
      bcrypt.compare(password, user.password).then((result) => {
        const doMatch = result;
        if (doMatch) {
          console.log("password matched");
          res.json({ redirectTo: "/", user: user });
        } else {
          errorMessage = "Invalid email or password.";
          res.json({ dummy: "dummy", errorMessage: errorMessage });
        }
      });
    })
    .catch((err) => {
      res.json({ dummy: "dummy", errorMessage: errorMessage });
      console.log(err);
    });
};

exports.postSignup = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  let securePassword = password;
  let errorMessage;
  await bcrypt.hash(password, 10, (err, hash) => {
    if (!err) {
      User.findOne({ email: email })
        .then((userDoc) => {
          if (userDoc) {
            errorMessage = "User found with the same id!";
            throw new Error(errorMessage);
          } else {
            const user = new User({
              name: name,
              email: email,
              password: hash,
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
    }
  });
};

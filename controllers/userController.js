const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  registerValidation,
  loginValidation,
} = require("../middlewares/userValidation");

const register = (req, res) => {
  const { email, password, fullName, cpf, telePhone, invitationCode } = req.body;
  const validation = registerValidation({
    email,
    password,
    fullName,
    cpf,
    telePhone,
    invitationCode
  });
  const username = email.substring(0, email.lastIndexOf("@"));
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (!response) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const user = {
                email,
                username,
                password: hash,
                fullName,
                cpf,
                telePhone,
                invitationCode
              };
              new User(user)
                .save()
                .then((response) => {
                  res.status(200).json({
                    message: "Thanks for register!",
                    response,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          res.status(400).json({
            message: "User already exists!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const login = (req, res) => {
  const { email, password } = req.body;
  const validation = loginValidation({ email, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          bcrypt.compare(password, response.password, function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  _id: response._id,
                  email: response.email,
                  username: response.username,
                },
                process.env.SECRET,
                { expiresIn: "1h" }
              );
              res.status(200).json({
                message: "Welcome back!",
                token,
              });
            } else {
              res.status(400).json({
                message: "Password doesn't match!",
              });
            }
            if (err) {
              serverError(res);
            }
          });
        } else {
          res.status(400).json({
            message: "User not found. Please register now!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

module.exports = {
  register,
  login
};

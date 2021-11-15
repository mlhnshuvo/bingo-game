const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  registerValidation,
  loginValidation,
} = require("../middlewares/userValidation");

const register = (req, res) => {
  const { email, password } = req.body;
  const validation = registerValidation({
    email,
    password,
    fullName,
    cpf,
    telePhone,
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
                password,
                fullName,
                cpf,
                telePhone,
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
            message: "User not found!",
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

const getUser = (req, res) => {
  User.find()
    .select("-password")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getMyAccount = (req, res) => {
  const { email } = req.user;
  User.findOne({ email: email })
    .select("-password")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateUser = (req, res) => {
  const { firstName, lastName, phone, currentPassword, newPassword } = req.body;
  if (currentPassword && newPassword) {
    User.findOne({ _id: req.user._id })
      .then((responseOne) => {
        bcrypt.compare(
          currentPassword,
          responseOne.password,
          function (error, result) {
            if (result) {
              bcrypt.hash(newPassword, 10, function (err, hash) {
                if (hash) {
                  const updateWithPass = {
                    firstName,
                    lastName,
                    phone,
                    password: hash,
                  };
                  User.findOneAndUpdate({ _id: req.user._id }, updateWithPass, {
                    new: true,
                  })
                    .select("-password")
                    .then((response) => {
                      res.status(200).json(response);
                    })
                    .catch(() => {
                      serverError(res);
                    });
                }
                if (err) {
                  serverError(res);
                }
              });
            } else {
              res.status(400).json({
                message: "Password doesn't match!",
              });
            }
            if (error) {
              serverError(res);
            }
          }
        );
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    const updateUser = {
      firstName,
      lastName,
      phone,
    };
    User.findOneAndUpdate({ _id: req.user._id }, updateUser, {
      new: true,
    })
      .select("-password")
      .then((response) => {
        res.status(200).json(response);
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  register,
  login,
  getUser,
  getMyAccount,
  updateUser,
  deleteUser,
};

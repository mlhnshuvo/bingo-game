const InputNumber = require("../Model/InputNumber");
const serverError = require("../utils/serverError");

const addNumber = (req, res) => {
  const { number } = req.body;
  if (req.user.username === "unicoder11") {
    InputNumber.find()
      .then((findRes) => {
        if (
          findRes.length > 0 &&
          findRes[findRes.length - 1].number.length < 27
        ) {
          findRes[findRes.length - 1].number.push(number);
          InputNumber.findOneAndUpdate(
            { id: findRes.length.toString() },
            findRes[findRes.length - 1],
            { new: true }
          )
            .then((saveNum) => {
              res.status(200).send(saveNum);
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          const card = { number: number, id: findRes.length + 1 };
          new InputNumber(card)
            .save()
            .then((saveNum) => {
              res.status(200).send(saveNum);
            })
            .catch(() => {
              serverError(res);
            });
        }
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const addPrice = (req, res) => {
  const { price } = req.body;
  InputNumber.findOneAndUpdate(
    { id: req.params.id },
    { price },
    { new: true }
  )
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getCardNumber = (req, res) => {
  if (req.user.username === "unicoder11") {
    InputNumber.find()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch(() => {
        serverError(res);
      });
  }
};

const deleteNumber = (req, res) => {
  if (req.user.username === "unicoder11") {
    InputNumber.findOneAndRemove({ id: req.params.id })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch(() => {
        serverError(res);
      });
  }
};

module.exports = {
  addNumber,
  getCardNumber,
  addPrice,
  deleteNumber,
};

const User = require("../Model/User");
const Card = require("../Model/Card");
const serverError = require("../utils/serverError");

const selectCard = (req, res) => {
  const { cardData } = req.body;
  const card = {
    authorId: req.user._id,
    card: cardData,
  };
  new Card(card)
    .save()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  selectCard,
};

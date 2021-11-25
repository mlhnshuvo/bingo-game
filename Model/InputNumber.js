const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const numberSchema = new Schema(
  {
    id: String,
    buy: {
      type: Boolean,
      default: false,
    },
    number: [],
    price: Number
  },
  {
    timestamps: true,
  }
);

module.exports = model("cardnumber", numberSchema);

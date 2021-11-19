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
  },
  {
    timestamps: true,
  }
);

module.exports = model("cardnumber", numberSchema);

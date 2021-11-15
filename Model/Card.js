const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cardSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("card", cardSchema);

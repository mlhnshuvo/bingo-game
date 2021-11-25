const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cardSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    card: [
      {
        id: String,
        number: [],
        price: Number,
        _id: false,
      }
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("card", cardSchema);

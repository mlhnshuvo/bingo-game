const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    fullName: {
      type: String,
      min: 3,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    telePhone: {
      type: String,
      required: true,
    },
    invitationCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);

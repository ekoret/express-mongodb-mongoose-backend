const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    weekly: Number,
    totalCredits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema); //users -> in mongodb

module.exports = User;

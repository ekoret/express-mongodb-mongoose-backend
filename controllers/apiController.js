//Import the models into controllers to use them
const User = require("../models/User");

const routeTest = (req, res) => {
  res.send({
    message: "test route",
  });
};

const createUser = (req, res) => {
  const user = new User({
    _id: Math.floor(Math.random() * 999999),
    username: "johndoe123",
    weekly: new Date(),
  });

  user.save((err) => {
    if (err) console.log(err);
  });

  res.send({
    message: "user created",
  });
};

module.exports = {
  routeTest,
  createUser,
};

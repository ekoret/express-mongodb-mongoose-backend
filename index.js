const main = () => {
  require("dotenv").config();
  const express = require("express");
  const cors = require("cors");
  const mongoose = require("mongoose");
  const connectDB = require("./config/dbConnection");

  const app = express();
  const port = process.env.PORT || 3000;

  //Connect to DB
  connectDB();

  //Middleware
  app.use(express.urlencoded({ extended: false })); //handling form data / data in the url
  app.use(express.json()); //handling json
  app.use(cors());

  //Routes
  app.use("/api", require("./routes/api"));

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");

    //Ready
    app.listen(port, () => {
      console.log(`Server listning on port ${port}`);
    });
  });
};

main();

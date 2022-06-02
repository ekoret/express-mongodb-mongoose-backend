const express = require("express");
const APIController = require("../controllers/apiController");
const router = express.Router();

router.route("/").get(APIController.routeTest);

router.route("/createUser").get(APIController.createUser);

module.exports = router;

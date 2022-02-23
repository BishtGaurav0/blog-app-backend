const express = require("express");
const secondcontroller = require("../controll/secondTile")
const secondRouter  = express.Router();

secondRouter.route("/data1").get(secondcontroller.secondget);


module.exports = secondRouter;
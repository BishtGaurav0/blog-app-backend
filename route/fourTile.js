const express = require("express");
const Fourthcontroller = require("../controll/fourTile")
const secondRouter  = express.Router();

secondRouter.route("/data3").get(Fourthcontroller.fourthget);


module.exports = secondRouter;
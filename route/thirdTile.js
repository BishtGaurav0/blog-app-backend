const express = require("express");
const Thirdcontroller = require("../controll/thirdTile")
const secondRouter  = express.Router();

secondRouter.route("/data2").get(Thirdcontroller.thirdget);


module.exports = secondRouter;
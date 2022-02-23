const express = require("express");
const topcontroller = require("../controll/Toppost")
const secondRouter  = express.Router();

secondRouter.route("/post").get(topcontroller.toppostget);


module.exports = secondRouter;
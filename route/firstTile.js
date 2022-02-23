const express = require("express");
const firstcontroller = require("../controll/firstTile")
const firstrouter  = express.Router();

firstrouter.route("/data").get(firstcontroller.firstget);


module.exports = firstrouter;
const express = require("express");

const categoryCmp = require("../controll/category");


const  secondRouter = express.Router();


secondRouter.route("/blog").get(categoryCmp.category);
secondRouter.route("/blog/:category").get(categoryCmp.category);
secondRouter.route("/blog/:Title/:category").get(categoryCmp.category);





module.exports =  secondRouter;
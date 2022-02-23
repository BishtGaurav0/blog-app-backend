const express = require("express");
const firstcmp = require("./firstTile");
const secondcmp= require("./secondTile");
const thirdcmp = require("./thirdTile");
const fourthcmp = require("./fourTile");
const topcmp = require("./Toppost");
const category = require("./category");
const router = express.Router();

router.use("/first",firstcmp);
router.use("/second",secondcmp);
router.use("/third",thirdcmp);
router.use("/fourth",fourthcmp);
router.use("/top",topcmp);
router.use("/project",category);

module.exports = router
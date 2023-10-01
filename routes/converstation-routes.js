const express = require("express");
const { body } = require("express-validator");

const converstationController = require("../controllers/converstation-controller.js");
const { isAuth } = require("../middlewares/isAuth");

const router = express.Router();

//create a conv
router.post("/create", isAuth, converstationController.create);

module.exports = router;

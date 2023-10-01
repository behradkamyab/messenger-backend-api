const express = require("express");
const { body } = require("express-validator");

const converstationController = require("../controllers/converstation-controller.js");
const { isAuth } = require("../middlewares/isAuth");

const router = express.Router();

//create a conv
router.post(
  "/create",
  [body("receiverId").not().isEmpty().trim()],
  isAuth,
  converstationController.create
);

//get converstations
router.get("/", isAuth, converstationController.getAllConverstations);

module.exports = router;

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

//delete converstations
router.delete(
  "/delete",
  isAuth,
  converstationController.deleteAllConverstations
);

//delete one converstation
router.delete(
  "/delete/:converstationId",
  isAuth,
  converstationController.deleteOneConverstation
);

module.exports = router;

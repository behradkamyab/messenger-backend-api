const express = require("express");
const { body } = require("express-validator");

const messageController = require("../controllers/message-controller.js");
const { isAuth } = require("../middlewares/isAuth");

const router = express.Router();

//send message
router.post("/send/:converstationId", isAuth, messageController.sendMessage);

//get messages
router.get("/:converstationId", isAuth, messageController.getMessages);

module.exports = router;

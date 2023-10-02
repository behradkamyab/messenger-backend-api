const Converstation = require("../models/converstation");
const Message = require("../models/message");

exports.sendMessage = async (req, res, next) => {
  const converstationId = req.params.converstationId;
  const content = req.body.content;
  let converstation;
  try {
    converstation = await Converstation.findById(converstationId);
    if (!converstation) {
      const err = new Error("Converstation not founded!");
      err.statusCode = 404;
      throw err;
    }
    const members = converstation.members;
    const sender = req.userId;
    const receiver = members.find((memberId) => memberId != sender);

    if (!receiver) {
      const err = new Error("Receiver not founded!");
      err.statusCode = 404;
      throw err;
    }
    const message = new Message({
      converstationId: converstationId,
      sender: sender,
      receiver: receiver,
      content: content,
    });

    if (!message) {
      const err = new Error("Something went wrong");
      err.statusCode = 500;
      throw err;
    }
    const result = await message.save();
    if (result) {
      converstation.messages.push(result);
      console.log(converstation);

      const finalResult = await converstation.save();
      if (finalResult) {
        res.status(201).json({
          success: true,
          message: "Your message has been sent!",
          messageId: result._id.toString(),
        });
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

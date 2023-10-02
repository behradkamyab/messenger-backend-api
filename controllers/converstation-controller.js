const Converstation = require("../models/converstation");

const { validationResult } = require("express-validator");

//dar sakht converstation farz bar in shode ast ke minimum participants 2 nafar bashad
exports.create = async (req, res, next) => {
  const userId = req.userId;
  const receiverId = req.body.receiverId;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const err = new Error("Validation failed!");
      err.statusCode = 422;
      err.data = errors.array();
      throw err;
    }

    const converstation = new Converstation({
      members: [userId, receiverId],
    });
    if (!converstation) {
      const err = new Error("Cannot create new conv try again later!");
      err.statusCode = 500;
      throw err;
    }
    const result = await converstation.save();
    if (!result) {
      const err = new Error("Something went wrong!");
      err.statusCode = 500;
      throw err;
    }
    res
      .status(201)
      .json({ success: true, converstationId: result._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllConverstations = async (req, res, next) => {
  let receiverMember = [];
  try {
    let converstations = await Converstation.find({
      members: req.userId,
    }).populate("members");
    if (!converstations) {
      const err = new Error("Cannot find converstations");
      err.statusCode = 404;
      throw err;
    }

    console.log(converstations);
    converstations.forEach((c) => {
      c.members.forEach((member) => {
        if (member._id != req.userId) {
          receiverMember.push(member.name);
        }
      });
    });
    console.log(receiverMember);
    res.status(200).json({
      success: true,
      converstations: converstations,
      members: receiverMember,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteAllConverstations = async (req, res, next) => {
  const userId = req.userId;
  try {
    const converstations = await Converstation.find({ members: userId });
    if (!converstations) {
      const err = new Error("There is no converstation to delete");
      err.statusCode = 404;
      throw err;
    }
    const result = await Converstation.deleteMany({});
    if (result) {
      res.status(204).json({
        success: true,
        message: "All the converstations has been deleted!",
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOneConverstation = async (req, res, next) => {
  const converstationId = req.params.converstationId;
  try {
    const result = await Converstation.findByIdAndDelete(converstationId);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Selected converstation has been deleted!",
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

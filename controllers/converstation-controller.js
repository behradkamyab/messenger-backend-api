const Converstation = require("../models/converstation");

exports.create = async (req, res, next) => {
  const userId = req.userId;
  const selectedUserId = req.body.selectedUserId;
  try {
    const converstation = new Converstation({
      participants: { userId, selectedUserId },
    });
    if (converstation) {
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

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const converstationSchema = new Schema(
  {
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Converstation", converstationSchema);

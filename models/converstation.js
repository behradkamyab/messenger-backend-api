const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const converstationSchema = new Schema(
  {
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Converstation", converstationSchema);

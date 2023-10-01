const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const converstationSchema = new Schema(
  {
    members: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Converstation", converstationSchema);

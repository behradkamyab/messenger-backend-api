const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const converstationSchema = new Schema(
  {
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Converstation", converstationSchemaSchema);

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);

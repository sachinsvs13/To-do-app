const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      maxLength: [20, "name cannot exceed 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Todo", todoSchema);

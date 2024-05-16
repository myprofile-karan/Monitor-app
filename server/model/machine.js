const mongoose = require("mongoose");

const machineSettingsSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    machineType: {
      type: String,
      required: true,
    },
    machineConfig: {
      type: String,
      required: true,
    },
    machineSize: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    uniqueKey: {
      type: String,
      required: true,
      unique: true,
    },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Machine = mongoose.model("Machine", machineSettingsSchema);

module.exports = Machine;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    serviceText: { type: String, required: true },
    ServiceThumbnail: { type: String, required: true },
    ServiceGallery: [],
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;

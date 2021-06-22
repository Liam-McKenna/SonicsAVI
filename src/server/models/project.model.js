const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    projectText: { type: String, required: true },
    projectThumbnail: { type: String, required: true },
    projectGallery: [],
    projectTags: [],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;

const router = require("express").Router();
let Project = require("../models/project.model");

// READ ALL PROJECTS
router.route("/").get((req, res) => {
  Project.find()
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error: " + err));
});

//ADD NEW PROJECT
router.route("/add").post((req, res) => {
  //get data from POST body
  const projectName = req.body.projectName;
  const projectText = req.body.projectText;
  const projectThumbnail = req.body.projectThumbnail;
  const projectGallery = req.body.projectGallery;
  const projectTags = req.body.projectTags;
  //create new Project Object with the data collected above.
  const newProject = new Project({
    projectName,
    projectText,
    projectThumbnail,
    projectGallery,
    projectTags,
  });
  newProject
    .save()
    .then(() => res.json("Project Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE BY ID
router.route("/update/:id").post((req, res) => {});

//DELETE BY ID
router.route("/delete/:id").post((req, res) => {});

module.exports = router;

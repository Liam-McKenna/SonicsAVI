const router = require("express").Router();
let Service = require("../models/service.model");

// READ/GET ALL SERVICES
router.route("/").get((req, res) => {
  Service.find()
    .then((service) => res.json(service))
    .catch((err) => res.status(400).json("Error: " + err));
});

// READ/GET SINGLE SERVICE
router.route("/:id").get((req, res) => {
  Service.findById(req.params.id)
    .then((service) => res.json(service))
    .catch((err) => res.status(400).json("Error: " + err));
});

// ADD NEW SERVICE
router.route("/add").post((req, res) => {
  //get data from POST body
  const serviceName = req.body.serviceName;
  const serviceText = req.body.serviceText;
  const ServiceThumbnail = req.body.ServiceThumbnail;
  const ServiceGallery = req.body.ServiceGallery;
  //create new Service Object with the data collected above.
  const newService = new Service({
    serviceName,
    serviceText,
    ServiceThumbnail,
    ServiceGallery,
  });
  newService
    .save()
    .then(() => res.json("Service Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// UPDATE SERVICE
router.route("/delete/:id").update((req, res) => {});

// DELETE SERVICE
router.route("/delete/:id").delete((req, res) => {
  Service.findByIdAndDelete(req.params.id)
    .then(() => res.json("Service deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

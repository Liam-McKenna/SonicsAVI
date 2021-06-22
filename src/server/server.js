const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoBD Connection Established");
});

const servicesRouter = require("./routes/services");
const projectsRouter = require("./routes/projects");

app.use("/services", servicesRouter);
app.use("/projects", projectsRouter);

app.listen(port, () => `Server running on port ${port}`);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userController = require("./src/controllers/user.controller");
const urlController = require("./src/controllers/urlshort.controller");

app.use("/user", userController);
app.use("/url", urlController);

app.listen(1314, async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/moviemasai");
  console.log("listening on port 1314");
});

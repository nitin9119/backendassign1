const User = require("../models/user.model");

const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const item = await User.create(req.body);

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await User.find().lean().exec();

    return res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;

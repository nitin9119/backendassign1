const express = require("express");
const Url = require("../models/urlshort.model");
const { nanoid } = require("nanoid");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let url = await Url.findOne({ orginalUrl: req.body.orginalUrl });

    if (!url) {
      let shortUrlId = nanoid(6);

      url = new Url({
        shortId: shortUrlId,
        orginalUrl: req.body.orginalUrl,
      });

      await url.save();

      return res.status(201).send(url);
    } else {
      return res.status(200).send(url);
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

router.get("/:shortId", async (req, res) => {
  console.log(req.params.shortId);
  try {
    let url = await Url.findOne({ shortId: req.params.shortId });
    console.log(url.orginalUrl);
    return res.redirect(url.orginalUrl);
  } catch (e) {
    return res.send("message");
  }
});

module.exports = router;

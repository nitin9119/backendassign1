const express = require("express");
const mongoose = require("mongoose");

let urlSchema = mongoose.Schema({
  shortId: { type: String, required: true },
  orginalUrl: { type: String, required: true },
});

const Url = mongoose.model("url", urlSchema);
module.exports = Url;

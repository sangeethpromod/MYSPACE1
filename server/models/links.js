// models/Link.js

const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  bioName:String,
  about:String,
  emoji:String,
  instagramLink: String,
  facebookLink: String,
  pintrestLink: String,
  xLink: String,
  linkdinLink: String,
  threadsLink: String,
});

module.exports = mongoose.model("Link", linkSchema);

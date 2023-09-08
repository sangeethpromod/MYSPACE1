// controllers/authController.js

const Link = require("../models/links"); // Corrected model import
const { link } = require("../routes/authRoutes");

// Controller function to save user data
const saveLinkData = async (req, res) => {
  try {
    const {
      bioName,
      about,
      emoji,
      instagramLink,
      facebookLink,
      pintrestLink,
      xLink,
      linkdinLink,
      threadsLink,
    } = req.body;

    const newLink = new Link({
      bioName,
      about,
      emoji,
      instagramLink,
      facebookLink,
      pintrestLink,
      xLink,
      linkdinLink,
      threadsLink,
    });

    // Save the document to MongoDB
    await newLink.save();

    res.status(201).json({ message: "User data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getLinkData = async (req, res) => {
  try {
    // Fetch link data from MongoDB
    const links = await Link.find();

    res.status(200).json(links);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  saveLinkData,
  getLinkData,
};

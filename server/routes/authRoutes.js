const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const linkController = require("../controllers/linksController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/linkdata", linkController.saveLinkData);
router.get("/linkdata", linkController.getLinkData);

// router.get("/check-username/:username", async (req, res) => {
//   const { username } = req.params;

//   try {
//     const user = await User.findOne({ username });

//     if (user) {
//       res.json({ exists: true });
//     } else {
//       res.json({ exists: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

module.exports = router;

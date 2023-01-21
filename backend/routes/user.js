const express = require("express");
const User = require("../models/user_model");
const generateToken = require("../utils/generateToken.js");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.send("registered Succesfully, Login to enter!");
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send({ id: user._id, token: generateToken(user._id) });
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

router.post("/verify", auth, async (req, res) => {
  try {
    res.send("Verified Succesfully");
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

module.exports = router;

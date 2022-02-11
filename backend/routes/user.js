const express = require("express");
const User = require("../models/user_model");
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
    res.send(user._id);
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: e });
  }
});

module.exports = router;

const express = require("express");
const User = require("../models/user_model");
const router = express.Router();
const jwt=require("jsonwebtoken");

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
    const token = jwt.sign({ _id: user._id.toString() }, "renting");
    res.send(token);
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: e });
  }
});

module.exports = router;

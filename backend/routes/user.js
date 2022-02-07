const express = require("express");
const User = require("../models/user_model");
const router = express.Router();

// router.post('/login', async (req, res) => {
//   const { name, email, password, confirmpass } = req.body;
//   if (password !== confirmpass) {
//     res.status(400).send("password dont't match");
//   } else {
//     const user = new User({name,email,password});
//     try {
//       await user.save();
//       res.send("registered Succesfully, Login to enter!");
//     } catch (e) {
//       res.status(400).json({ message: e });
//     }
//   }
// });

// router.post("/register", async (req, res) => {
//   try {
//     const user = await User.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     res.send(user);
//   } catch (e) {
//     res.status(400).json({ message: e });
//   }
// });

module.exports = router;

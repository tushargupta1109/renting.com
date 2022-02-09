const express = require("express");
const House = require("../models/house_model");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { address, city, rent, detail, mobile } = req.body;
  console.log(req.user);
  const house = new House({ address, city, rent, detail, mobile });
  try {
    await house.save();
    res.send("Added Succesfully");
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

router.get("/houses", async (req, res) => {
  try {
    const house = await House.find({});
    res.send(house);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

// router.delete("/remove", async (req, res) => {
//   const { id } = req.body;
//   console.log(id);
//   try {
//     const house = await House.findOneAndDelete({ owner: id });
//     if (!house) {
//       return res.status(400).send();
//     }
//     res.send(task);
//   } catch (e) {
//     res.status(400).send({ message: e });
//   }
// });

module.exports = router;

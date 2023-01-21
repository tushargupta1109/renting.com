const express = require("express");
const House = require("../models/house_model");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.post("/add", auth, async (req, res) => {
  const { address, city, rent, detail, mobile, owner, image } = req.body;
  const house = new House({
    address,
    city,
    rent,
    detail,
    mobile,
    owner,
    image,
  });
  try {
    await house.save();
    res.send("Added Succesfully");
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

router.post("/houses", async (req, res) => {
  const { location } = req.body;
  if (location) {
    try {
      const house = await House.find({ city: location });
      res.send(house);
    } catch (e) {
      res.status(400).json({ message: e });
    }
  } else {
    try {
      const house = await House.find({});
      res.send(house);
    } catch (e) {
      res.status(400).json({ message: e });
    }
  }
});

router.post("/remove", auth, async (req, res) => {
  const { id1, id2 } = req.body;
  try {
    const house = await House.findOneAndDelete({ _id: id1, owner: id2 });
    res.send(house);
  } catch (e) {
    res.status(400).send({ message: e });
  }
});

module.exports = router;

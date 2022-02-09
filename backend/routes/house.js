const express = require("express");
const House = require("../models/house_model");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/add", auth,async (req, res) => {
  const { address, city, rent, detail, mobile } = req.body;
  const owner=req.user._id;
  const house = new House({ address, city, rent, detail, mobile ,owner});
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

router.delete("/remove", auth,async (req, res) => {
  try {
    const house = await House.findOneAndDelete({ owner: req.user._id});
    if (!house) {
      return res.status(400).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send({ message: e });
  }
});

module.exports = router;

const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const auth = async (req, res, next) => {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "please authenticate" });
  }
};

module.exports = auth;

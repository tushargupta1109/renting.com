const mongoose = require("mongoose");
require('dotenv').config();

const DB=process.env.MONGODB_URL
mongoose.connect(DB, {
  useNewUrlParser: true,
});
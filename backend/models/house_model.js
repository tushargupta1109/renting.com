const mongoose = require("mongoose");

const houseSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  rent: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  owner: {
    type:String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const House = mongoose.model("house", houseSchema);

module.exports = House;

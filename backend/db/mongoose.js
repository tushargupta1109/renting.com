const mongoose = require("mongoose");
const DB="mongodb+srv://tushar:tushar@cluster0.oul7j.mongodb.net/renting?retryWrites=true&w=majority"
mongoose.connect(DB, {
  useNewUrlParser: true,
});
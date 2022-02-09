const express = require("express");
const UserRouter = require("./routes/user");
const houseRouter = require("./routes/house");
const cors = require("cors");
require("./db/mongoose");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",UserRouter)
app.use("/",houseRouter)

app.listen(5000, () => {
  console.log("server is running on port 3000");
});

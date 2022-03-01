const express = require("express");
const UserRouter = require("./routes/user");
const HouseRouter = require("./routes/house");
const cors = require("cors");
require("./db/mongoose");

const app = express();
app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", UserRouter);
app.use("/", HouseRouter);

const port = 5000;
app.listen(port, () => {
  console.log("server is running on port 3000");
});

const express = require("express");
const UserRouter = require("./routes/user");
const HouseRouter = require("./routes/house");
const cors = require("cors");
require("./db/mongoose");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", UserRouter);
app.use("/", HouseRouter);

app.listen(port, () => {
  console.log("server is running on port", port);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/db/connection");

const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
const hardwareCategoryRouter = require("./src/routes/hardwareCategory");

app.use(
  cors({
    origin: "*",
    // methods: "GET,POST,PUT,DELETE",
    // credentials:true,
    // optionSuccessStatus:200
  })
);
app.use(bodyParser.json());
app.use("/hardwareCategory", hardwareCategoryRouter);
// app.use('/users', usersRouter);

app.use("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Server Running");
});

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`);
});

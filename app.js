const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/db/connection");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5000;
const hardwareCategoryRouter = require("./src/routes/hardwareCategory");
const userRouter = require("./src/routes/users");
const companyRouter = require("./src/routes/companies");
const finishRouter = require("./src/routes/finishes");
const hardwareRouter = require("./src/routes/hardwares");
const layoutRouter = require("./src/routes/layouts");
const glassTypeRouter = require("./src/routes/glassTypes");
const glassTreatmentRouter = require("./src/routes/glassTreatments");
const indexRouter = require("./src/routes/index");

app.use(
  cors({
    origin: "*",
    // methods: "GET,POST,PUT,DELETE",
    // credentials:true,
    // optionSuccessStatus:200,
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/hardwareCategory", hardwareCategoryRouter);
app.use("/users", userRouter);
app.use("/companies", companyRouter);
app.use("/finishes", finishRouter);
app.use("/hardwares", hardwareRouter);
app.use("/layouts", layoutRouter);
app.use("/glassTypes", glassTypeRouter);
app.use("/glassTreatments", glassTreatmentRouter);
app.use("/*", indexRouter);

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`);
});

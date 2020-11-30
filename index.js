const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const medRouter = require("./routers/medications");
const medAlertRouter = require("./routers/medicationAlerts");
const doseLogRouter = require("./routers/doseLog");
// const loginRouter = require("./routers/userLogin");

const app = express();
const port = process.env.PORT || 4007;

app.use(bodyParser.json());
app.use("/", usersRouter, medRouter);
app.use("/medications", medRouter);
app.use("/medicationAlerts", medAlertRouter);
app.use("/doseLog", doseLogRouter);
// app.use("/userLogin", loginRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

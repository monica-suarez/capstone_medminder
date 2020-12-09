const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const medRouter = require("./routers/medications");
const medAlertRouter = require("./routers/medicationAlerts");
const doseLogRouter = require("./routers/doseLog");
// const userLoginRouter = require("./routers/userLogin");
// const cors = require("cors");

const app = express();
const port = process.env.PORT || 4007;

app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use("/users", usersRouter);
app.use("/medications", medRouter);
app.use("/med_alerts", medAlertRouter);
app.use("/dose_log", doseLogRouter);
// app.use("/users", userLoginRouter);

// app.get("/allow-cors", { mode: "cors" }, (req, res) => {
//   res.send("Welcome to our server!");
// });

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

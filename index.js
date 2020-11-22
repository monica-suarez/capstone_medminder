const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
// const medRouter = require("./routers/medications");

const app = express();
const port = process.env.PORT || 4007;

app.use(bodyParser.json());
app.use("/users", usersRouter);
// app.use("/medications", medRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

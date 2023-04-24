// Import Express JS to your app.
const express = require("express");
// Let's create a router.
const app = express.Router();

app.get("/", (req, res) => {
  res.json("Welcome to API Server.");
});

const users = require("./users");
const tasks = require("./tasks");
app.use("/users", users);
app.use("/tasks", tasks);

module.exports = app;

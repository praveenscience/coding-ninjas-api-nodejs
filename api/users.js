// Import Express JS to your app.
const express = require("express");
// Let's create a router.
const app = express.Router();

const users = [
  "Vilas",
  "Belal Ahmad",
  "Koushik VSS",
  "Shivendra",
  "Pavan",
  "Abhishek Sharma",
  "Gloria Solomon",
  "Shivani R",
  "Mounika G",
  "Adnaan Hussain"
];

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/:userId", (req, res) => {
  if (typeof users[req.params.userId] === "undefined") {
    res.status(404).json("Not found poda!");
  } else {
    res.json(users[req.params.userId]);
  }
});

module.exports = app;

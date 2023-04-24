// Import Express JS to your app.
const express = require("express");
// Initialise a server object.
const app = express();
// Let's use port 5000 for our backend.
const port = 5000;

// Let's Get /
app.get("/", (req, res) => {
  res.json("Hello Coding Ninjas");
});

// POST method for the root is wrong!
app.post("/", (req, res) => {
  res.status(400).json("Why da?");
});

// App, please listen to a particular port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});

// Import Express JS to your app.
const express = require("express");
// Let's create a router.
const app = express.Router();

const tasks = [
  { user: "Vilas", task: "Avatar: The Way of Water" },
  { user: "Vilas", task: "Phenomena" },
  { user: "Vilas", task: "Dirty Little Secret" },
  { user: "Vilas", task: "Beast" },
  { user: "Shivani R", task: "Medieval" },
  { user: "Shivendra", task: "Attack on Titan" },
  { user: "Shivendra", task: "John Wick: Chapter 4" },
  { user: "Shivendra", task: "Detective Knight: Independence" },
  { user: "Shivani R", task: "Money Shot: The Pornhub Story" },
  { user: "Shivani R", task: "Shark Side of the Moon" },
  { user: "Gloria Solomon", task: "Ip Man: The Awakening" },
  { user: "Gloria Solomon", task: "20th Century Girl" },
  { user: "Gloria Solomon", task: "Harry Potter and the Chamber of Secrets" },
  { user: "Shivani R", task: "Doctor Strange in the Multiverse of Madness" },
  { user: "Mounika G", task: "Perfect Addiction" }
];

app.get("/", (req, res) => {
  res.json(tasks);
});

module.exports = app;

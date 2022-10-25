const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(cr => cr.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

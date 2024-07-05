const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send({ message: "home" });
});

app.get("/route1", (req, res) => {
  res.send({ message: "route 1" });
});

app.get("/route2", (req, res) => {
  res.send({ message: "route 2" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

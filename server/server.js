const pool = require("./database");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "home" });
});

app.get("/users", async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM users");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  const { name } = req.body;
  try {
    const results = await pool.query(
      "INSERT INTO users (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

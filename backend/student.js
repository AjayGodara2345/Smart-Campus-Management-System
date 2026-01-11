const express = require("express");
const router = express.Router();
const pool = require("./db");

router.get("/", async (req, res) => {
  const students = await pool.query("SELECT * FROM students");
  res.json(students.rows);
});

router.post("/add", async (req, res) => {
  const { name, course } = req.body;
  await pool.query(
    "INSERT INTO students(name, course) VALUES($1,$2)",
    [name, course]
  );
  res.json({ message: "Student added" });
});

module.exports = router;

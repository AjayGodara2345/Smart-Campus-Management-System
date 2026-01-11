const express = require("express");
const router = express.Router();
const pool = require("./db");

router.post("/mark", async (req, res) => {
  const { student_id, status } = req.body;

  await pool.query(
    "INSERT INTO attendance(student_id, status) VALUES($1,$2)",
    [student_id, status]
  );

  res.json({ message: "Attendance marked" });
});

module.exports = router;

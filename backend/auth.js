const express = require("express");
const router = express.Router();
const pool = require("./db");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password]
  );

  if (user.rows.length === 0)
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", role: user.rows[0].role });
});

module.exports = router;

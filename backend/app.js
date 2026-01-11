const express = require("express");
const cors = require("cors");

const auth = require("./auth");
const student = require("./student");
const faculty = require("./faculty");
const attendance = require("./attendance");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/student", student);
app.use("/api/faculty", faculty);
app.use("/api/attendance", attendance);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

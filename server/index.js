require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connect = require("./dbConfig/dbConfig");

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(cookieParser());
app.use(express.json());

connect();

// import Routes
const machineRouter = require("./routes/machine.routes.js");
const userRouter = require("./routes/user.routes.js");

// routes
app.use("/api", machineRouter);
app.use("/api", userRouter);

app.get("/api/get", (req, res) => {
  res.send("fhsdjkfhsdjkfhjkdsh");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth-routes");
const converstationRoutes = require("./routes/converstation-routes");
const messageRoutes = require("./routes/message-routes");

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/converstation", converstationRoutes);
app.use("/api/messages", messageRoutes);
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res
    .status(status)
    .json({ success: false, message: message, status: status, data: data });
});

const DbConnection = mongoose.connect(DB_URL);
if (DbConnection) {
  console.log("Server is connected!");
  app.listen(PORT);
}

//one-to-one chat!!

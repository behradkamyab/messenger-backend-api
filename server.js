const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const authRoutes = require("./routes/auth-routes");
const converstationRoutes = require("./routes/converstation-routes");
const messageRoutes = require("./routes/message-routes");

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profile-pics");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + file.originalname);
  },
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.json());
app.use(multer({ storage: fileStorage }).single("imageUrl"));
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

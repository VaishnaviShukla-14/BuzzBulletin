const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const URL = process.env.URI;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static('uploads'));

app.use('/api', require('./routes/user.routes'))
app.use('/api', require('./routes/News.routes'));

app.use(express.static("uploads"));



mongoose
  .connect(URL)
  .then(() => {
    console.log("Mongodb Connected successfully", URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
  });

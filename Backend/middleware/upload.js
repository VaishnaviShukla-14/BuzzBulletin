const multer = require("multer");
const path = require("path");

const storage =  multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}-${
        file.originalname.replace(/\s/g, '')
      }`
    );
  },
})
  const uploads = multer({ storage: storage  });

  module.exports = uploads;

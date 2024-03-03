const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
   internationalform,
   nationalform,
   educationForm,
   sportsform,
   getNationalNews,
} = require("../controlers/news.controler");


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads/"); // Specify the directory where files should be uploaded
   },
   filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename
   },
});
const upload = multer({ storage });

router.post('/internationalnews', internationalform);
router.post("/nationalnews", upload.single("image"), nationalform);
router.post('/educationalnews', educationForm);
router.post('/sportsnews', sportsform);
router.get('/nationalnews', getNationalNews)

module.exports = router;

const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
   internationalform,
   nationalform,
   educationform,
   sportsform,
   getNationalNews,
   getSportsNews,
   getEducationNews,
   getInternationalNews,
   deleteInternationalNews,
   deleteNationalNews,
   deleteEducationNews,
   deleteSportsNews,
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

//Storing national news in backend
router.post('/internationalnews', upload.single("image"), internationalform);
router.post("/nationalnews", upload.single("image"), nationalform);
router.post('/educationalnews',upload.single("image"), educationform);
router.post('/sportsnews', upload.single("image"),sportsform);


//Getting the national news from backend
router.get('/nationalnews',upload.single("image"), getNationalNews);
router.get('/internationalnews',upload.single("image"), getInternationalNews);
router.get('/educationalnews',upload.single("image"), getEducationNews);
router.get('/sportsnews',upload.single("image"), getSportsNews);

//Delete news from the form api
router.delete('/deleteinternationalnews',deleteInternationalNews);
router.delete('/deletenationalnews',deleteNationalNews);
router.delete('/deleteeducationalnews',deleteEducationNews);
router.delete('/deletesportsnews',deleteSportsNews);

module.exports = router;

const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
   internationalform,
   nationalform,
   educationform,
   sportsform,
   BlogForm,
   getNationalNews,
   getSportsNews,
   getEducationNews,
   getInternationalNews,
   getBlog,
   searchNews,
   deleteInternationalNews,
   deleteNationalNews,
   deleteEducationNews,
   deleteSportsNews,
   deleteBlog,
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
router.post('/internationalnews', upload.fields([{ name: "image" }, { name: "video" }]), internationalform);
router.post('/nationalnews', upload.fields([{ name: "image" }, { name: "video" }]), nationalform);
router.post('/educationalnews',upload.fields([{ name: "image" }, { name: "video" }]), educationform);
router.post('/sportsnews', upload.fields([{ name: "image" }, { name: "video" }]), sportsform);
router.post('/blog', upload.fields([{ name: "image" }, { name: "video" }]), BlogForm);

//Getting the national news from backend
router.get('/nationalnews',upload.fields([{ name: "image" }, { name: "video" }]), getNationalNews);
router.get('/internationalnews',upload.fields([{ name: "image" }, { name: "video" }]), getInternationalNews);
router.get('/educationalnews',upload.fields([{ name: "image" }, { name: "video" }]), getEducationNews);
router.get('/sportsnews',upload.fields([{ name: "image" }, { name: "video" }]), getSportsNews);
router.get('/blog',upload.fields([{ name: "image" }, { name: "video" }]), getBlog);

//Delete news from the form api
router.delete('/deleteinternationalnews',deleteInternationalNews);
router.delete('/deletenationalnews',deleteNationalNews);
router.delete('/deleteeducationalnews',deleteEducationNews);
router.delete('/deletesportsnews',deleteSportsNews);
router.delete('/deleteblog',deleteBlog);

// Search news from the form api
router.get('/searchnews', searchNews);

module.exports = router;

const InternationalForm = require('../models/education.models');
const NationalForm = require('../models/national.models');
const EducationForm = require('../models/international.models');
const SportsForm = require('../models/sports.models');


const educationform = async (req, res) => {
  try {
    const { title, article, highlight, name, date, time } = req.body;
    const dateTime = `${date} ${time}`;
    const image = req.file.path;

    const newEducationForm = new EducationForm({
      title,
      article,
      highlight,
      name,
      dateTime,
      image,
    });

    const savedForm = await newEducationForm.save();

    res.status(201).json({ message: 'Education form created successfully', form: savedForm });
  } catch (error) {
    console.error('Error creating education form', error);
    res.status(500).json({ message: 'Error creating education form' });
  }
};

const getEducationNews = async (req, res) => {
  try {
    const educationForms = await EducationForm.find();
    res.status(200).json(educationForms);
  } catch (error) {
    console.error("Error fetching education forms", error);
    res.status(500).json({ message: "Error fetching education forms" });
  }
};



const internationalform = async (req, res) => {
  try {
    const { name, title, article, highlight } = req.body;
    const { date, time } = req.body;
    const image = req.file.path;

    const newInternationalNews = new InternationalForm({
      title,
      article,
      highlight,
      name,
      dateTime: `${date} ${time}`,
      image,
    });

    await newInternationalNews.save();

    res.status(201).json({ message: "International news created successfully", news: newInternationalNews });
  } catch (error) {
    console.error("Error creating international news", error);
    res.status(500).json({ message: "Error creating international news" });
  }
};

const getInternationalNews = async (req, res) => {
  try {
    const internationalNews = await InternationalForm.find();
    res.status(200).json(internationalNews);
  } catch (error) {
    console.error("Error fetching international news", error);
    res.status(500).json({ message: "Error fetching international news" });
  }
};



const nationalform = async (req, res) => {
  try {
    const { name, title, article, highlight } = req.body;
    const { date, time } = req.body; // Extract date and time from req.body
    const image = req.file.path; // Assuming multer saves the file path to req.file.path

    const newNews = new NationalForm({
      title,
      article,
      highlight,
      name,
      dateTime: `${date} ${time}`, // Combine date and time to form dateTime
      image,
    });

    await newNews.save();

    res.status(201).json({ message: "News created successfully", news: newNews });
  } catch (error) {
    console.error("Error creating news", error);
    res.status(500).json({ message: "Error creating news" });
  }
};


const getNationalNews = async (req, res) => {
  try {
    const nationalNews = await NationalForm.find();
    res.status(200).json(nationalNews);
  } catch (error) {
    console.error("Error fetching national news", error);
    res.status(500).json({ message: "Error fetching national news" });
  }
};






const sportsform = async (req, res) => {
  try {
    const { title, article, highlight, sport, name } = req.body;
    const {date, time} = req.body;
    const image = req.file.path; // Assuming multer saves the file path to req.file.path

    const newNews = new SportsForm({
      title,
      article,
      highlight,
      sport,
      dateTime:`${date} ${time}`,
      name,
      image,
    });

     await newNews.save();

    res.status(201).json({ message: 'Sports form created successfully', news: newNews });
  } catch (error) {
    console.error('Error creating sports form', error);
    res.status(500).json({ message: 'Error creating sports form' });
  }
};

const getSportsNews = async (req, res) => {
  try {
    const sportsNews = await SportsForm.find();
    res.status(200).json(sportsNews);
  } catch (error) {
    console.error("Error fetching sports forms", error);
    res.status(500).json({ message: "Error fetching sports forms" });
  }
};




module.exports = {
  internationalform,
  nationalform,
  educationform,
  sportsform,
  getNationalNews,
  getSportsNews,
  getInternationalNews,
  getEducationNews,
};









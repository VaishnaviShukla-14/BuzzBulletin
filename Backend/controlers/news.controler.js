const InternationalForm = require('../models/education.models');
const NationalForm = require('../models/national.models');
const EducationForm = require('../models/international.models');
const SportsForm = require('../models/sports.models');


const educationForm = async (req, res) => {
  try {
    const { title, article, highlight, name, date, time } = req.body;
    const dateTime = `${date} ${time}`;
    const educationForm = new EducationForm({
      title,
      article,
      highlight,
      name,
      dateTime,
    });

    const savedForm = await educationForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error saving education form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const internationalform = async (req, res) => {
  try {
    const { title, article, highlight, name, date, time } = req.body;

    // Combine date and time into a single dateTime string
    const dateTime = `${date} ${time}`;

    const internationalForm = new InternationalForm({
      title,
      article,
      highlight,
      name,
      dateTime,
    });

    const savedForm = await internationalForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const nationalform = async (req, res) => {
//   try {
//     const { title, article, highlight, name, date, time } = req.body;
//     const dateTime = `${date} ${time}`;

//     const nationalForm = new NationalForm({
//       title,
//       article,
//       highlight,
//       name,
//       dateTime,
//     });

//     const savedForm = await nationalForm.save();

//     res.status(201).json(savedForm);
//   } catch (error) {
//     console.error('Error saving form:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// controllers/sportsFormController.js

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
    const { title, article, highlight, sport, date, time, name } = req.body;
    const dateTime = `${date} ${time}`;

    const sportsForm = new SportsForm({
      title,
      article,
      highlight,
      sport,
      dateTime,
      name,
    });

    const savedForm = await sportsForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error saving sports form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




module.exports = {
  internationalform,
  nationalform,
  educationForm,
  sportsform,
  getNationalNews,
};









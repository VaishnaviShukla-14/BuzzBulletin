const EducationForm = require('../models/education.models');
const NationalForm = require('../models/national.models');
const InternationalForm  = require('../models/international.models');
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



const deleteInternationalNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete international news with title: ${title}`);

    const deletedNews = await InternationalForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`International news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "International news deleted" });
    } else {
      console.log(`International news with title ${title} not found`);
      return res.status(404).json({ message: "International news not found" });
    }
  } catch (error) {
    console.error(`Error deleting international news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteNationalNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete national news with title: ${title}`);

    const deletedNews = await NationalForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`National news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "National news deleted" });
    } else {
      console.log(`National news with title ${title} not found`);
      return res.status(404).json({ message: "National news not found" });
    }
  } catch (error) {
    console.error(`Error deleting national news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteEducationNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete education news with title: ${title}`);

    const deletedNews = await EducationForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`Education news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Education news deleted" });
    } else {
      console.log(`Education news with title ${title} not found`);
      return res.status(404).json({ message: "Education news not found" });
    }
  } catch (error) {
    console.error(`Error deleting education news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteSportsNews = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete sports news with title: ${title}`);

    const deletedNews = await SportsForm.findOneAndDelete({ title });

    if (deletedNews) {
      console.log(`Sports news with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Sports news deleted" });
    } else {
      console.log(`Sports news with title ${title} not found`);
      return res.status(404).json({ message: "Sports news not found" });
    }
  } catch (error) {
    console.error(`Error deleting sports news with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
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
  deleteInternationalNews,
  deleteNationalNews,
  deleteEducationNews,
  deleteSportsNews,
};









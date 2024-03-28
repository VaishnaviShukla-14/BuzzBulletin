const EducationForm = require('../models/education.models');
const NationalForm = require('../models/national.models');
const InternationalForm  = require('../models/international.models');
const SportsForm = require('../models/sports.models');
const Blog = require('../models/blog.models');
const Blog_Story = require('../models/Blog_story.models');
const Carousel = require('../models/Carousel.models');

const BlogForm = async (req, res) => {
  try {
    const { title, article, name, date, time } = req.body;
    const dateTime = `${date} ${time}`;
    let image = '';
    let video = '';

    // Check if image file is provided
    if (req.files["image"]) {
      image = req.files["image"][0].path; // Get the path of the uploaded image
    }

    // Check if video file is provided
    if (req.files["video"]) {
      video = req.files["video"][0].path; // Get the path of the uploaded video
    }

    const newBlogPost = new Blog({
      title,
      article,
      name,
      dateTime,
      image,
      video,
    });

    const savedPost = await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).json({ message: 'Error creating blog post' });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};


const Blog_StoryForm = async (req, res) => {
  try {
    const { title, article, name, date, time } = req.body;
    const dateTime = `${date} ${time}`;
    let image = '';
    let video = '';

    // Check if image file is provided
    if (req.files["image"]) {
      image = req.files["image"][0].path; // Get the path of the uploaded image
    }

    // Check if video file is provided
    if (req.files["video"]) {
      video = req.files["video"][0].path; // Get the path of the uploaded video
    }

    const newBlogPost = new Blog_Story({
      title,
      article,
      name,
      dateTime,
      image,
      video,
    });

    const savedPost = await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).json({ message: 'Error creating blog post' });
  }
};

const getBlog_Story = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};

// const CarouselForm = async (req, res) => {
//   try {
//     const { title, name, date, time } = req.body;
//     const dateTime = `${date} ${time}`;
//     let image = '';
//     let video = '';

//     // Check if image file is provided
//     if (req.files && req.files["image"]) {
//       image = req.files["image"][0].path; // Get the path of the uploaded image
//     }

//     // Check if video file is provided
//     if (req.files && req.files["video"]) {
//       video = req.files["video"][0].path; // Get the path of the uploaded video
//     }

//     const newCarouselItem = new Carousel({
//       title,
//       name,
//       dateTime,
//       image,
//       video,
//     });

//     const savedItem = await newCarouselItem.save();

//     res.status(201).json({ message: 'Carousel item created successfully', item: savedItem });
//   } catch (error) {
//     console.error('Error creating carousel item', error);
//     res.status(500).json({ message: 'Error creating carousel item', error: error.message });
//   }
// };

// const getCarousel = async (req, res) => {
//   try {
//     const carouselItems = await Carousel.find();
//     res.status(200).json(carouselItems);
//   } catch (error) {
//     console.error("Error fetching carousel items", error);
//     res.status(500).json({ message: "Error fetching carousel items", error: error.message });
//   }
// };

const CarouselForm= async (req, res) => {
  try {
    const { title, article, name, date, time } = req.body;
    const dateTime = `${date} ${time}`;
    let image = '';
    let video = '';

    // Check if image file is provided
    if (req.files["image"]) {
      image = req.files["image"][0].path; // Get the path of the uploaded image
    }

    // Check if video file is provided
    if (req.files["video"]) {
      video = req.files["video"][0].path; // Get the path of the uploaded video
    }

    const newBlogPost = new Blog({
      title,
      article,
      name,
      dateTime,
      image,
      video,
    });

    const savedPost = await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully', post: savedPost });
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).json({ message: 'Error creating blog post' });
  }
};

const getCarousel = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};

const educationform = async (req, res) => {
  try {
    const { name, title, article, highlight } = req.body;
    const { date, time } = req.body; // Extract date and time from req.body
    const image = req.files["image"][0].path; // Get the path of the uploaded image
    const video = req.files["video"][0].path; // Get the path of the uploaded video

    const newEducationForm = new EducationForm({
      title,
      article,
      highlight,
      name,
      dateTime: `${date} ${time}`, // Combine date and time to form dateTime
      image,
      video,
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
    const { date, time } = req.body; // Extract date and time from req.body
    const image = req.files["image"][0].path; // Get the path of the uploaded image
    const video = req.files["video"][0].path; // Get the path of the uploaded video

    const newNews = new InternationalForm({
      title,
      article,
      highlight,
      name,
      dateTime: `${date} ${time}`, // Combine date and time to form dateTime
      image,
      video,
    });

    await newNews.save();

    res.status(201).json({ message: "International news created successfully", news: newNews });
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
    const image = req.files["image"][0].path; // Get the path of the uploaded image
    const video = req.files["video"][0].path; // Get the path of the uploaded video

    const newNews = new NationalForm({
      title,
      article,
      highlight,
      name,
      dateTime: `${date} ${time}`, // Combine date and time to form dateTime
      image,
      video,
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
    const { title, article, highlight, sport, name, date, time } = req.body;

    // Convert date and time strings to a Date object
    const dateTime = new Date(`${date}T${time}`);

    const image = req.files["image"][0].path; // Get the path of the uploaded image
    const video = req.files["video"][0].path; // Get the path of the uploaded video

    const newNews = new SportsForm({
      title,
      article,
      highlight,
      sport,
      dateTime,
      name,
      image,
      video,
    });

    // Save the new sports form
    await newNews.save();

    // Respond with success message and created news data
    res.status(201).json({ message: 'Sports form created successfully', news: newNews });
  } catch (error) {
    // Handle any errors that occur during the creation process
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

const deleteBlog = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete blog post with title: ${title}`);

    const deletedPost = await Blog.findOneAndDelete({ title }); // Assuming the model name is Blog

    if (deletedPost) {
      console.log(`Blog post with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Blog post deleted" });
    } else {
      console.log(`Blog post with title ${title} not found`);
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    console.error(`Error deleting blog post with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteBlog_Story = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete blog post with title: ${title}`);

    const deletedPost = await Blog.findOneAndDelete({ title }); // Assuming the model name is Blog

    if (deletedPost) {
      console.log(`Blog post with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Blog post deleted" });
    } else {
      console.log(`Blog post with title ${title} not found`);
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    console.error(`Error deleting blog post with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const deleteCarousel = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      console.error("Invalid title provided");
      return res.status(400).json({ message: "Invalid title provided" });
    }

    console.log(`Attempting to delete carousel item with title: ${title}`);

    const deletedCarouselItem = await Carousel.findOneAndDelete({ title });

    if (deletedCarouselItem) {
      console.log(`Carousel item with title ${title} deleted successfully`);
      return res.status(200).json({ message: "Carousel item deleted" });
    } else {
      console.log(`Carousel item with title ${title} not found`);
      return res.status(404).json({ message: "Carousel item not found" });
    }
  } catch (error) {
    console.error(`Error deleting carousel item with title ${title}:`, error.message);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};




const searchNews = async (req, res) => {
  try {
    const { date, title, category } = req.query;

    let query = {};

    if (date) {
      query.dateTime = { $gte: new Date(date), $lt: new Date(date + 'T23:59:59.999Z') };
    }

    if (title) {
      query.title = { $regex: new RegExp(title, 'i') }; // Case-insensitive title search
    }

    if (category) {
      query.category = category; // Assuming your news model has a 'category' field
    }

    const result = await NationalForm.find(query);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error searching news", error);
    res.status(500).json({ message: "Error searching news" });
  }
};


module.exports = {
  internationalform,
  nationalform,
  educationform,
  sportsform,
  BlogForm,
  Blog_StoryForm,
  CarouselForm,
  getNationalNews,
  getSportsNews,
  getInternationalNews,
  getEducationNews,
  getBlog,
  getBlog_Story,
  getCarousel,
  deleteInternationalNews,
  deleteNationalNews,
  deleteEducationNews,
  deleteSportsNews,
  deleteBlog,
  deleteBlog_Story,
  deleteCarousel,
  searchNews,
};
const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false, // Image is not mandatory
    },
    video: {
      type: String,
      required: false, // Video is not mandatory
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("blog", newsSchema);
module.exports = Blog;
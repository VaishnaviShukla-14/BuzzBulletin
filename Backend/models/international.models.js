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
    highlight: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Newsinternational = mongoose.model("InterNews", newsSchema);

module.exports = Newsinternational;

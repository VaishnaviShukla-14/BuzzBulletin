const mongoose = require('mongoose');

const sportsFormSchema = mongoose.Schema({
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
    default: 'none',
  },
  sport: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Newss = mongoose.model('sportsNews', sportsFormSchema);

module.exports = Newss;

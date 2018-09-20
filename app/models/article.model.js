const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  title:      { type: String, required: true },
  author:     { type: String, required: true },
  title_img:  { type: String, required: true },
  summary:    { type: String, required: true },
  content:    { type: String, required: true },
  date:       { type: Date, required: true, default: Date.Now },
  hidden:     { type: Boolean, default: true},
  comments:   [{ author: String, body: String, published: Date }],
  meta: {
    votes: Number,
    tags: String
  }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Article', ArticleSchema);
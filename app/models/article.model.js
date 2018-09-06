const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = mongoose.Schema({
  title:  { type: String, required: true },
  author: {type: Schema.Types.ObjectId, required: true},
  title_img: {type: String, required: true},
  summary: {type: String, required: true},
  content: {type: String, required: true},  
  tags: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);
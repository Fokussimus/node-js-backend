const Article = require('../models/article.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
  // Create an Article
  const article = new Article({
      title: req.body.title || "Untitled Note", 
      content: req.body.content,
      summary: req.body.summary,
      title_img: req.body.title_img,
      author: req.body.author,
      tags: req.body.tags
  });

  // Save Note in the database
  article.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the article."
      });
  });
};


// Retrieve and return all notes from the database.
exports.find = (req, res) => {
  var filter = {};
  if(req.query.author) filter.author = req.query.author;
  if(req.query.tags) filter.tags = req.query.tags;
  if(req.query.published) filter.published = req.query.published;
  Article.find(filter)
  .then(articles => {
      res.send(articles);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving articles."
      });
  });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  Article.findById(req.params.articleId)
  .then(article => {
      if(!article) {
          return res.status(404).send({
              message: "Article not found with id " + req.params.articleId
          });            
      }
      res.send(article);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Article not found with id " + req.params.articleId
          });                
      }
      return res.status(500).send({
          message: "Error retrieving note with id " + req.params.articleId
      });
  });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {

  // Find note and update it with the request body
  Article.findByIdAndUpdate(req.params.articleId, {
      title: req.body.title || "Untitled Article",
      content: req.body.content
  }, {new: true})
  .then(article => {
      if(!article) {
          return res.status(404).send({
              message: "Article not found with id " + req.params.articleId
          });
      }
      res.send(article);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Article not found with id " + req.params.articleId
          });                
      }
      return res.status(500).send({
          message: "Error updating article with id " + req.params.articleId
      });
  });
};


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Article.findByIdAndRemove(req.params.articleId)
  .then(article => {
      if(!article) {
          return res.status(404).send({
              message: "Article not found with id " + req.params.articleId
          });
      }
      res.send({message: "Article deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Article not found with id " + req.params.articleId
          });                
      }
      return res.status(500).send({
          message: "Could not delete article with id " + req.params.articleId
      });
  });
};
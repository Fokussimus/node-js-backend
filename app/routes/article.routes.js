module.exports = (app) => {
  const articles = require('../controllers/articles.controller.js');

/**
 * @api {post} /articles Add a new article
 * @apiName CreateArticle
 * @apiGroup Articles
 * 
 * */
  app.post('/articles', articles.create);

  // Retrieve all Notes
  app.get('/articles', articles.find);

  // Retrieve a single Note with noteId
  app.get('/articles/:articleId', articles.findOne); 

  // Update a Note with noteId
  app.put('/articles/:articleId', articles.update);

  // Delete a Note with noteId
  app.delete('/articles/:articleId', articles.delete);
}
module.exports = (app) => {
  const articles = require('../controllers/articles.controller.js');

  // Create a new Note
  app.post('/articles', articles.create);

  // Retrieve all Notes
  app.get('/articles', articles.findAll);

  // Retrieve a single Note with noteId
  app.get('/articles/:articleId', articles.findOne);

  // Update a Note with noteId
  app.put('/articles/:articleId', articles.update);

  // Delete a Note with noteId
  app.delete('/articles/:articleId', articles.delete);
}
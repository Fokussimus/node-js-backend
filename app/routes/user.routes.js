module.exports = (app) => {
  const users = require('../controllers/users.controller.js');

  app.post('/users', users.create);
  app.get('/users', users.find);
  app.get('/users/:userId', users.findOne);
  app.put('/users/:userID', users.update);
  app.delete('/users/:users', users.delete);
}
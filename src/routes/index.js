const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Austin Nelson');
});
routes.get('/new', (req, res) => {
  res.send('{input name here}');
});

module.exports = routes;
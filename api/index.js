const { Router } = require('express');

const routes = Router();

routes
  .use('/users', require('./users/'))
  .use('/posts', require('./posts'));


module.exports = routes;

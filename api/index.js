const { Router } = require('express');

const routes = Router();

routes
  .use('/users', require('./users/'))
  .use('/posts', require('./posts'))
  .use('/files', require('./files/index'));


module.exports = routes;

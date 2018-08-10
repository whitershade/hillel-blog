const { Router } = require('express');

const routes = Router();

routes
	.use('/users', require('./users/'))
	.use('/posts', require('./posts'))
	.use('/comments', require('./comments'))
	.use('/files', require('./files/index'));


module.exports = routes;

const { Router } = require('express');
const passport = require('passport');

const middlewares = require('../middlewares');
const validation = require('./validation');
const controllers = require('./controllers');


const router = Router();

router
	.post(
		'/',
		middlewares.isAuth,
		middlewares.validate(validation.createItem),
		controllers.createItem
	);


module.exports = router;

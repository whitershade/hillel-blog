const { Router } = require('express');
const passport = require('passport');

const middlewares = require('../middlewares');
const validation = require('./validation');
const controllers = require('./controllers');


const router = Router();

router
	.get(
		'/',
		controllers.getItems
	)
	.get(
		'/:id',
		controllers.getItem
	)
	.post(
		'/',
		middlewares.isAuth,
		middlewares.validate(validation.createItem),
		controllers.createItem
	)
	.patch(
		'/:id',
		middlewares.isAuth,
		controllers.updateItem
	)
	.delete(
		'/:id',
		middlewares.isAuth,
		controllers.deleteItem,
	);


module.exports = router;

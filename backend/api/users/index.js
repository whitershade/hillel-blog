const { Router } = require('express');
const passport = require('passport');

const middlewares = require('../middlewares');
const validation = require('./validation');
const controllers = require('./controllers');


const router = Router();

router
  .get(
    '/',
    middlewares.isAuth,
    controllers.getItem
  )
  .get(
    '/logout',
    middlewares.isAuth,
    controllers.logout
  )
  .post(
    '/',
    middlewares.validate(validation.createItem),
    controllers.createItem
  )
  .patch(
    '/',
    middlewares.validate(validation.patchItem),
    controllers.patchItem
  )
  .post(
    '/login',
    passport.authenticate('local', {}),
    controllers.login
  );


module.exports = router;

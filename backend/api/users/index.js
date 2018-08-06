const { Router } = require('express');
const passport = require('passport');

const middlewares = require('../middlewares');
const validation = require('./validation');
const controllers = require('./controllers');


const router = Router();

router
  .get(
    '/me',
    middlewares.isAuth,
    controllers.getMe
  )
  .get(
    '/logout',
    middlewares.isAuth,
    controllers.logout
  )
  .post(
    '/',
    middlewares.validate(validation.register),
    controllers.register
  )
  .post(
    '/login',
    passport.authenticate('local', {}),
    controllers.login
  );


module.exports = router;

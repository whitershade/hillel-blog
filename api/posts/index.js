const { Router } = require('express');
const passport = require('passport');
const ctrl = require('./controller');
const mdl = require('../middlewares');


const router = Router();

router
  .get('/', ctrl.getItems)
  .get('/:id', ctrl.getItem)
  .post('/', mdl.isAuth, ctrl.createItem)


module.exports = router;

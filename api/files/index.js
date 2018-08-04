const { Router } = require('express');

const controllers = require('./controllers');
const mdl = require('../middlewares');
const upload = require('../../utils/multer');


const routes = Router();

routes.post('/', mdl.isAuth, upload.single('image'), controllers.fileUploaded);

module.exports = routes;

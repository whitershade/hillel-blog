const { pick } = require('lodash');
const { model: UsersModel } = require('./model');


const controllers = {
  register: (req, res) => {
    UsersModel.create(req.body, (err) => {
      if (err) {
        if (err.code === 11000) {
          return res.status(400).send({ message: 'email already registered' });
        }
        return res.status(400).send({ message: err.message });
      }

      return res.sendStatus(200);
    });
  },

  login: (req, res) => {
    res.status(200).send(pick(req.user, ['_id', 'email']));
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.sendStatus(200);
  },

  getMe: (req, res) => {
    res.status(200).send(req.user);
  }
}


module.exports = { ...controllers };

const { pick } = require('lodash');
const { model: UsersModel } = require('./model');


const controllers = {
  createItem: (req, res) => {
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

  getItem: (req, res) => {
    res.status(200).send(req.user);
  },

  patchItem: (req, res) => {
    UsersModel
      .findOneAndUpdate(
        {
          _id: req.user._id,
        },
        { $set: req.body },
        { new: true },
      )
      .then((user) => {
        if (!user) res.status(404).send();

        res.send(user);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },

  login: (req, res) => {
    res.status(200).send(pick(req.user, ['_id', 'email', 'name']));
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.sendStatus(200);
  },
}


module.exports = controllers;

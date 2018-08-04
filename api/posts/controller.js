const { pick, keyBy } = require('lodash');
const Model = require('./model');


const controllers = {
  getItems: (req, res) => {
    Model
      .find({})
      .then((posts) => {
        res.send(keyBy(posts, '_id'));
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },
  getItem: (req, res) => {
    Model
      .findOne({ _id: req.params.id })
      .then((post) => {
        if (!post) return res.status(404).send();

        res.send(post);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },
  createItem: (req, res) => {
    const newItem = new Model({
      title: req.body.title,
      text: req.body.text,
      _creator: req.user._id,
    });

    newItem
      .save()
      .then((post) => {
        res.send({ post });
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },
  // deleteItem: (req, res) => {
  //   Model
  //     .findOneAndRemove({
  //       _id: req.params.id,
  //       _creator: req.user._id,
  //     })
  //     .then((todo) => {
  //       if (!todo) return res.status(404).send();
  //
  //       res.send({ todo });
  //     })
  //     .catch((e) => {
  //       res.status(400).send(e);
  //     });
  // },
  // updateItem: (req, res) => {
  //   const body = pick(req.body, ['text', 'completed', 'completedAt']);
  //
  //   Model
  //     .findOneAndUpdate(
  //       {
  //         _id: req.params.id,
  //         _creator: req.user._id,
  //       },
  //       { $set: body },
  //       { new: true },
  //     )
  //     .then((todo) => {
  //       if (!todo) return res.status(404).send();
  //
  //       res.send({ todo });
  //     })
  //     .catch((e) => {
  //       res.status(400).send(e);
  //     });
  // },
};


module.exports = { ...controllers };

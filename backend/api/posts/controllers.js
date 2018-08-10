const { pick, keyBy, map } = require('lodash');
const Model = require('./model');
const stringSizeLimiter = require('../../utils/stringSizeLimiter');


const controllers = {
  getItems: (req, res) => {
    Model
      .find()
      .lean()
      .populate({
        path: 'addedBy',
        select: 'email name',
      })
      .exec((err, posts) => {
        if (err) return res.status(400).send(err);

        const postsLimitedByTextLength = map(posts, ({ text, ...postAttributes }) => {
          return { text: stringSizeLimiter(text, 300), ...postAttributes };
        })

        res.send(keyBy(postsLimitedByTextLength, '_id'));
      })
  },

  getItem: (req, res) => {
    Model
      .findOne({ _id: req.params.id })
      .then((post) => {
        if (!post) res.status(404).send();

        return post
          .populate({
            path: 'addedBy',
            select: 'email name',
          })
          .populate({
            path: 'comments',
            populate: {
              path: 'addedBy',
              select: 'email name'
            }
          })
          .execPopulate()
      })
      .then((post) => {
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
      addedBy: req.user._id,
    });

    newItem
      .save()
      .then((post) =>
        post
          .populate({
            path: 'addedBy',
            select: 'email name',
          })
          .execPopulate()
      )
      .then((post) => {
        res.send(post);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },

  updateItem: (req, res) => {
    const body = pick(req.body, ['title', 'text']);

    Model
      .findOneAndUpdate(
        {
          _id: req.params.id,
          addedBy: req.user._id,
          editable: true
        },
        { $set: body },
        { new: true },
      )
      .then((post) => {
        if (!post) res.status(404).send();

        return post
          .populate({
            path: 'addedBy',
            select: 'email name',
          })
          .execPopulate()
      })
      .then((post) => {
        res.send(post);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },

  deleteItem: (req, res) => {
    Model
      .findOneAndRemove({
        _id: req.params.id,
        addedBy: req.user._id,
      })
      .then((post) => {
        if (!post) return res.status(404).send();

        res.send(post._id);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  },
};


module.exports = { ...controllers };

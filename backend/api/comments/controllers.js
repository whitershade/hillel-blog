const { pick, keyBy } = require('lodash');
const Model = require('./model');
const Post = require('../posts/model');


const controllers = {
	createItem: (req, res) => {
		const newItem = new Model({
			text: req.body.text,
			relatedPost: req.body.relatedPost,
			addedBy: req.user._id
		});

		newItem
			.save()
			.then((comment) =>
				comment
					.populate({
						path: 'addedBy',
						select: 'email name'
					})
					.execPopulate())
			.then((comment) => Post.findOne({ _id: comment.relatedPost })
				.then((post) => {
					post.comments.push(comment);

					return post.save();
				})
				.then(() => {
					res.send(comment);
				}))
			.catch((e) => {
				res.status(400).send(e);
			});
	}
};


module.exports = { ...controllers };

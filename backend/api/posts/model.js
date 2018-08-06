const mongoose = require('../../db/mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  addedBy: {
    ref: 'UserModel',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  show: { type: Boolean, default: true },
  tags: [{type: String}],
  comments: [{
    ref: 'CommentModel',
    type: mongoose.Schema.Types.ObjectId
  }],
}, { timestamps: true });


module.exports = mongoose.model('PostModel', PostSchema);

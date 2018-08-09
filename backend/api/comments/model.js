const mongoose = require('../../db/mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  addedBy: {
    ref: 'UserModel',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  relatedPost: {
    required: true,
    ref: 'PostModel',
    type: mongoose.Schema.Types.ObjectId
  }
}, { timestamps: true });


module.exports = mongoose.model('CommentModel', CommentSchema);

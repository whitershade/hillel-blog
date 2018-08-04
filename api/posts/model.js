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
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
}, { timestamps: true });


module.exports = mongoose.model('PostModel', PostSchema);

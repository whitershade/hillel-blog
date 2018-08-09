const Joi = require('joi');

module.exports = {
  createItem: {
    body: {
      text: Joi
        .string()
        .required(),
      relatedPost: Joi
        .string()
        .required()
    },
  },
};

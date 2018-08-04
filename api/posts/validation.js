const Joi = require('joi');

module.exports = {
  createItem: {
    body: {
      title: Joi
        .string()
        .required(),
      text: Joi
        .string()
        .required(),
    },
  },
};

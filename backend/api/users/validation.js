const Joi = require('joi');

module.exports = {
  createItem: {
    body: {
      email: Joi
        .string()
        .trim()
        .email()
        .min(5)
        .max(100)
        .required(),
      password: Joi
        .string()
        .trim()
        .min(5)
        .max(100)
        .required(),
      name: Joi
        .string()
    },
  },
  patchItem: {
    body: {
      email: Joi
        .string()
        .trim()
        .email()
        .min(5)
        .max(100),
      name: Joi
        .string()
    },
  }
};

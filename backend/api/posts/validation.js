const Joi = require('joi');

module.exports = {
	createItem: {
		body: {
			title: Joi
				.string()
				.max(100)
				.required(),
			text: Joi
				.string()
				.required()
		}
	}
};

const Joi = require('joi');

module.exports = {
	createItem: {
		body: {
			text: Joi
				.string()
				.max(300)
				.required(),
			relatedPost: Joi
				.string()
				.required()
		}
	}
};

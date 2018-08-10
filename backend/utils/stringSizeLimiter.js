const { isString, isNumber } = require('lodash');

module.exports = function (string, limit, ending = '...') {
	if (!string) {
		throw new Error('No arguments was provided');
	}
	if (!isString(string)) {
		throw new TypeError('First argument should be a string');
	}
	if (!isNumber(limit)) {
		throw new TypeError('Second argument should be a number');
	}
	if (!isString(ending)) {
		throw new TypeError('Third argument should be a string');
	}

	const stringLength = string.length;
	const endingLength = ending.length;

	if (endingLength >= limit) {
		throw new Error('Limit should be biiger than ending length');
	}

	return stringLength <= limit ? string : string.slice(0, limit - endingLength) + ending; // eslint-disable-line no-magic-numbers
};

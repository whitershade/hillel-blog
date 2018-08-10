const { last } = require('lodash');


exports.fileUploaded = (req, res) => {
	if (!req.file) {
		res.status(422).send({ message: 'Image not provided' });
	}

	res.status(200).send(last(req.file.path.split('/tmp')));
};

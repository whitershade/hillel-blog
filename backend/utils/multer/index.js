const fs = require('fs');
const { last } = require('lodash');
const multer = require('multer');
const rootPath = require('app-root-path').path;
const path = require('path');


const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const destinationPath = path.join(rootPath, '..', 'tmp', 'images', req.user._id.toString());

		if (!fs.existsSync(destinationPath)) {
			fs.mkdirSync(destinationPath);
		}

		cb(null, destinationPath);
	},
	filename: (req, file, cb) => {
		const fileExtension = last(file.originalname.split('.'));

		cb(null, `${Date.now()}.${fileExtension}`);
	}
});

const fileFilter = (req, file, cb) => {
	if (!allowedMimeTypes.includes(file.mimetype)) {
		cb(new Error('Only .jpg, .gif and .png are allowed'));
	} else {
		cb(null, true);
	}
};

const upload = multer({
	storage,
	fileFilter
});


module.exports = upload;

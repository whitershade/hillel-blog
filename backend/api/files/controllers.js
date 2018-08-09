exports.fileUploaded = (req, res) => {
  console.log(req);
  if (!req.file) res.status(422).send({ message: 'Image not provided' })

  res.status(200).send(req.file.path);
};

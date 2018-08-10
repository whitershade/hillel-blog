const PostModel = require('./api/posts/model');

setInterval(() => {
  const dateOfExpired = new Date(Date.now() - 86400000); // 86400000 = one day

  PostModel.update(
    { editable: true, createdAt: { $lte: dateOfExpired } },
    { editable: false },
    { multi: true },
    function(err, res) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(res);
     }}
   );
}, 3600000); // 3600000 = one hour

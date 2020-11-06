var express = require('express');
var router = express.Router();
var url = require('url');

router.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = router;
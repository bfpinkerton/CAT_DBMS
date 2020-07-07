var express = require('express');
var router = express.Router();
var url = require('url');

/* GET landing page. */
router.get('/', function (req, res, next) {
  res.render('pages/landing/index');
});

/* GET login page */
router.get('/login', function (req, res, next) {
  res.render('pages/landing/login', {
    message: req.flash('error')
  });
});

module.exports = router;
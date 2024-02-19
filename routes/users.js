var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

router.get('/boba', function(req, res, next) {
  res.render('index', { title: 'Boba' });
});


module.exports = router;

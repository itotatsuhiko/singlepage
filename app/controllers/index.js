var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users/index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users/more', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users/more/index', { title: 'more' });
});

/* GET layer listing. */
router.get('/layer',function(req,res,next) {
  //res.send('respond with a resource');
  res.render('layer/index', { title: 'Open Layer'})
});

module.exports = router;

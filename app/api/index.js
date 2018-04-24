var express = require('express');
var router = express.Router();

var userController = require('./user.controllers');

/* GET users list */
router.get('/users', function(req, res, next) {
    
    userController.getUserList(req, res, next);
});

module.exports = router;
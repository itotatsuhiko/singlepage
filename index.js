var express = require('express');
var router = express.Router();

var userController = require('./user.controllers');
var genderController = require('./gender.controllers');
/* GET users list */
router.get('/users', function(req, res, next) {
    
    userController.getUserList(req, res, next);
});
/* GET users list */
router.get('/gender', function(req, res, next) {
    
    genderController.getgender(req, res, next);
});
module.exports = router;
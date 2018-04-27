var db = require('../models/db');
var controller = function() {
}

controller.getgender = function(req, res, next) {
    console.log('api getgender');
    var payload = {
        status : true,
        data : user_gender
    };
    res.json(payload);
}
var user_gender = [
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "X"
    },
    {
        gender: "Y"
    },
    {
        gender: "X"
    },
    {
        gender: "Y"
    },
    {
        gender: "X"
    },
    {
        gender: "Y"
    },
    {
        gender: "X"
    },
    {
        gender: "X"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "Y"
    },
    {
        gender: "X"
    },
    {
        gender: "Y"
    }
];

module.exports = controller;
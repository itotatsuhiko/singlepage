var db = require('../models/db');

var controller = function() {

}

controller.getUserList = function(req, res, next) {
    console.log('api getUserList');
    //console.log(req.param);
    var payload = {
    status : true,
    data : user_list
    };
    res.json(payload);
    /*
    db.query('select * from users', function(error, results, fields) {
        //if (error) throw error;
        console.log(error, results, fields);
        res.json(results);
    });
    */
}

var user_list = [
    {
        user_id : '1',
        name    : 'hwang songho',
        age     : '37'
    },
    {
        user_id : '2',
        name    : 'yamada tarou',
        age     : '25'
    },
    {
        user_id : '3',
        name    : 'suzuki hanako',
        age     : '20'
    }
];

module.exports = controller;
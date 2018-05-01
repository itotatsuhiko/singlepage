var db = require('../models/db');

var controller = function() {

}

controller.getGenderList = function(req, res, next) {
    console.log('api getUserList');
    //console.log(req.param);
    var payload = {
    status : true,
    data : user_gender
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

var user_gender = [
    {
        gender: "25" 
       },
       {
         gender: "25" 
       },
       {
         gender: "20" 
       },
       {
        gender: "43" 
       },
       {
        gender: "32" 
       },
       {
        gender: "42" 
       },
       {
        gender: "48" 
       },
       {
        gender: "66" 
       },
       {
        gender:"19" 
       },
       {
        gender:"45" 
       },
       {
        gender: "10" 
       },
       {
        gender: "73" 
       },
       {
        gender: "98" 
       },
       {
        gender: "27" 
       },
       {
        gender: "20" 
       },
       {
        gender: "55" 
       },
       {
        gender: "48"
       },
       {
        gender: "8"
       },
       {
        gender: "26"
       },
       {
        gender: "24"
       },
       {
        gender: "42"
        }
    
];

module.exports = controller;
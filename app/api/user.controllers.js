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
        user_id: "1",
        name: "ito tatsuhiko",
        age: "25" 
       },
       {
        user_id: "2",
        name: "yamada tarou",
         age: "25" 
       },
       {
        user_id: "3",
        name: "suzuki hanako",
        age: "20" 
       },
       {
        user_id: "4",
        name: "suzuki ichiro",
        age: "43" 
       },
       {
        user_id: "5",
        name: "hukunaga satomi",
        age: "32" 
       },
       {
        user_id: "6",
        name: "kano shouji",
        age: "42" 
       },
       {
        user_id: "7",
        name: "ide ai",
        age: "48" 
       },
       {
        user_id: "8",
        name: "komatu mihiro",
        age: "66" 
       },
       {
        user_id: "9",
        name: "matsuoka tomoko",
        age:"19" 
       },
       {
        user_id: "10",
        name: "saito mio",
        age:"45" 
       },
       {
        user_id: "11",
        name: "tanoue kouji",
        age: "10" 
       },
       {
        user_id: "12",
        name: "hayashi sin",
        age: "73" 
       },
       {
        user_id: "13",
        name: "okamoto shouji",
        age: "98" 
       },
       {
        user_id: "14",
        name: "kai yosiyuki",
        age: "27" 
       },
       {
        user_id: "15",
        name: "okabe rintaro",
        age: "20" 
       },
       {
        user_id: "16",
        name: "okumura hiroaki",
        age: "55" 
       },
       {
        user_id: "17",
        name: "nagata yuuji",
        age: "48"
       },
       {
        user_id: "18",
        name: "akimoto sousuke",
        age: "8"
       },
       {
        user_id: "19",
        name: "sato shu",
        age: "26"
       },
       {
        user_id: "20",
        name: "watanabe kaoru",
       age: "24"
       },
       {
        user_id: "21",
        name: "yuuki terumi",
        age: "42"
        }
    
];

module.exports = controller;
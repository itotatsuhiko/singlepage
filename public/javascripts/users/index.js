window.BaseApp || (window.BaseApp = {});
window.BaseApp.Users || (window.BaseApp.Users = {});


var userList = 
BaseApp.Users.UserList = function() {
    var $workArea = $('#container');
    this.$btnGetUserList = $workArea.find('.btn_search');
    this.$btnGetMore = $workArea.find('.btn_more');
//    this.$userTable = $workArea.find('#user_list_table');
}
userList.prototype.init = function () {
    console.log('init');
    this.$btnGetUserList.click(this.onClickGetUserListBtn.bind(this));
}
//ボタン押下時の処理
userList.prototype.onClickGetUserListBtn = function() {
    console.log('click');
    var apiService = new BaseApp.Users.ApiService(this);
    apiService.getJsonData(this.$userTable);
//    apiService.getGenderData(this.userTable);
}
//詳細画面遷移
$(document).on('click','.btn_more',function(){
    console.log('moreBtnclick');
    window.location.href = '/users/more/';
});
//テーブルを作成
userList.prototype.makeTable = function(payload) {
    var data = payload.data;
    console.log('payload.data');
    console.log(payload.data);
    $.extend( $.fn.dataTable.defaults, {
        language: { url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json" }
    });
    //テーブル反映
    $("#user_list_table").DataTable({
        retrieve: true, 
        searching: false,
        data,
        columns : [
            { data: "user_id" },
            { data: "name" },
            { data: "age" } ,
            { data: "gender"},
            { data : "btn", 
                    orderable: true, 
                    title : 'btn', 
                    'defaultContent': '<button class="btn btn-default btn_more">More</button>'
            },
        ]
    });
    console.log('data');
    console.log(data);
}

//javascriptのエントリポイント
$(document).ready(function() {
    console.log('hello');
    var userList = new BaseApp.Users.UserList();
    userList.init();

});

//api処理用のオブジェクト(クラス)
var apiService = BaseApp.Users.ApiService = function (context) {
    this.context = context;
}
apiService.prototype.init = function() {
}
apiService.prototype.getJsonData = function() {
    var json = 'http://localhost:3000/api/users'
    var json2 = 'http://localhost:3000/api/gender'
    var test = $.ajax( { 
        url: json,
        status: "true",
        dataSrc: "data", 
     })
     .done( function (data, textStatus, jqXHR) {
       //文字'歳'の付与
        var changeData;
        for (var i = 0; i < data.data.length; i++) {
            changeData = data.data[i].age + '歳';
            data.data[i].age = changeData;
        }
        var test = $.ajax( { 
            url: json2,
            status: "true",
            dataSrc: "data", 
        })
        .done(function(data2,textStatus, jqXHR){
            //console.log(data2);
              for (var i =0; i < data.data.length; i++) {
                data.data[i].gender = data2.data[i].gender
             }
         })
        //JS側でgenderカラム(X)を追加
        var addData= data;
        console.log('data');
        console.log (data);
        for (var i =0; i < data.data.length; i++) {
            data.data[i].gender = addData;
        }
        console.log(data);
        this.context.makeTable(data);

    }.bind(this)) 
    .fail( function (jqXHR, textStatus, error) {
        console.log('error');
    });
}

// apiService.prototype.getGenderData = function() {
//     var json = 'http://localhost:3000/api/gender'
//     $.ajax( { 
//         url: json,
//         status: "true",
//         dataSrc: "data" 
//      })
//      .done( function (data1, textStatus, jqXHR) {
//         this.context.makeTable(data1);
//         console.log(data1);
//     }.bind(this)) 
//     .fail( function (jqXHR, textStatus, error) {
//         console.log('error');
//     });
// }
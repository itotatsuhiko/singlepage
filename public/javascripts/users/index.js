window.BaseApp || (window.BaseApp = {});
window.BaseApp.Users || (window.BaseApp.Users = {});


var userList = 
BaseApp.Users.UserList = function() {
    var $workArea = $('#container');
    this.$btnGetUserList = $workArea.find('.btn_search');
    this.$btnGetMore = $workArea.find('.btn_more');
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
    window.location.href = `/users/more/#/`;
    //window.location.href = `/users/more/#/${user_id}`;
});
//テーブルを作成
userList.prototype.makeTable = function(payload) {
    console.log(payload)
    var data = payload.data;
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
            { data: "gender" },
            { data : "btn", 
                    orderable: true, 
                    title : 'btn', 
                    'defaultContent': '<button class="btn btn-default btn_more id=$user_id">More</button>'
            },
        ]
    });
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
    var userJsonUlr = 'http://localhost:3000/api/users'
    var genderJsonUlr = 'http://localhost:3000/api/gender'
    var test = $.ajax( {
        type: "GET", 
        url: userJsonUlr,
        status: "true",
        dataSrc: "data",
        dataType: "json",
        contentType: 'application/json' 
     })
     .done( function (usersData, userstextStatus, jqXHR) {
       //文字'歳'の付与
        var changeData;
        for (var i = 0; i < usersData.data.length; i++) {
            changeData = usersData.data[i].age + '歳';
            usersData.data[i].age = changeData;
        }
        $.ajax( {
            type: "GET", 
            url: genderJsonUlr,
            status: "true",
            dataSrc: "data",
            dataType: "json",
            contentType: 'application/json'
        })
        .done(function(gendersData,genderstextStatus, jqXHR){
            for(var i = 0; i < gendersData.length; i++){
                console.log('aa')
                for(var j = 0; j < gendersData.length; j++){
                        //console.log('usersData.data[i].gender');
                        // console.log(usersData.data[i].gender);
                        // console.log('gendersData.data[j].gender');
                        // console.log(gendersData.data[j].gender);
               }
            }
         })
        //  .fail( function (jqXHR, genderstextStatus, error) {
        //     console.log('error');
        //  })
        this.context.makeTable(usersData);
    }.bind(this)) 
    .fail( function (jqXHR, userstextStatus, error) {
        console.log('error');
    });
}


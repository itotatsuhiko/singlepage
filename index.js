window.BaseApp || (window.BaseApp = {});
window.BaseApp.Users || (window.BaseApp.Users = {});


var userList = 
BaseApp.Users.UserList = function(){
    var $workArea = $('#container');
    this.$btnGetUserList = $workArea.find('.btn_search');
    this.$userTable = $workArea.find('#user_list_table');
}
userList.prototype.init = function () {
    console.log('init');
    this.$btnGetUserList.click(this.onClickGetUserListBtn.bind(this));
}

userList.prototype.onClickGetUserListBtn = function(){
    console.log('click');
    var apiService = new BaseApp.Users.ApiService(this);
    apiService.getUserList().bind(this);
}
userList.prototype.renderTableRow = function(payload) {
    console.log('render');
    var data = payload.data;
    console.log(data);
    this.$userTable.find('tbody').empty();
    
}
//javascriptのエントリポイント
$(document).ready(function(){
    console.log('hello');
    var userList = new BaseApp.Users.UserList();
    userList.init();
});

//api処理用のオブジェクト(クラス)
var apiService = BaseApp.Users.ApiService = function (context) {
    this.context = context;
}
apiService.prototype.init = function(){
}
apiService.prototype.getUserList = function(){
    console.log(this.$userTable);
//    $("#user_list_table").DataTable(
    this.$userTable.DataTable(
        $.ajax({
            url : 'http://localhost:3000/api/users',
            datatype : 'json',
            columns : [
                { data : "user_id" },
                { data : "name" },
                { data : "age" }
            ]
        }).done( function (data, textStatus, jqXHR) {
            console.log(data);
            console.log("this:");
            console.log(this);
            this.context.renderTableRow(data);
        }.bind(this)) 
        .fail( function (jqXHR, textStatus, error) {
            console.log('error');
        })
    )};
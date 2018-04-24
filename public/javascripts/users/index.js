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
//ボタン押下時の処理
userList.prototype.onClickGetUserListBtn = function(){
    console.log('click');
    var apiService = new BaseApp.Users.ApiService(this);
    apiService.dataTable(this.$userTable);
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
apiService.prototype.dataTable = function(){
$(document).ready(function(){
	$.extend( $.fn.dataTable.defaults, {
		language: { url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json" }
	});
	$("#user_list_table").DataTable({
        retrieve: true, 
        searching: false,
        ajax: { url: "http://localhost:3000/api/users",
            status: "true",
             dataSrc: "data" },
		columns: [
			{ data: "user_id" },
            { data: "name" },
            { data : "age" }
		]
	});
});
};

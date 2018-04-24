window.BaseApp || (window.BaseApp = {});
window.BaseApp.Top || (window.BaseApp.Top = {});


var topPage = BaseApp.Top.TopPage = function () {

    var $workArea = $('#container');
    
}

topPage.prototype.init = function () {
    console.log("hello world");
}

// javascriptのエントリポイント
$(document).ready(function() {
	var topPage = new BaseApp.Top.TopPage();
    topPage.init();

});


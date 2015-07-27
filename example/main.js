define(function(require, exports, module){
	
require("jquery");
var UrlBarIframe=require("modulePath/urlBarIframe.js");

module.exports=main;
	
function main(){

	$(function(){
		try{
			var urlBarIframe=new UrlBarIframe();
			$("#body").append(urlBarIframe.jqry);

			//测试
			$.get("./template/urlBarIframe.htm", function(data){
				//alert("Data Loaded: " + data);
				var a=$(data);
				var b=a.find("[templateId='iframe']");
				$("#body").append(a);
			});
			
			//测试
			/*
			var a=$("<div></div>").load("./template/urlBarIframe.htm", function() {
				var b=a.find("[templateId='iframe']");
				$("#body").append(b);
			});*/


		}catch(e){
			alert(e.message);
		}
		
	});			
};
	
});


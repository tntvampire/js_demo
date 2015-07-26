define(function(require, exports, module){
	
require("jquery");
var UrlBarIframe=require("./urlBarIframe.js");

module.exports=main;
	
function main(){

	$(function(){
		try{
			var urlBarIframe=new UrlBarIframe();
			$("#body").append(urlBarIframe.jqry);
		}catch(e){
			alert(e.message);
		}
		
	});			
};
	
});


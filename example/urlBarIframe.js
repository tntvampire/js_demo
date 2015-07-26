define(function(require, exports, module){

require("jquery");
var History=require("modulePath/history.js");
module.exports=UrlBarIframe;

function UrlBarIframe(){
		
	this.id="";
	this.html="<div class='' id='"+this.id+"'>"+this.config["template"]["urlBar"]+this.config["template"]["button"]+this.config["template"]["button"]+this.config["template"]["iframe"]+"</div>";
	this.jqry=$(this.html);
	
	this.urlBar=this.jqry.find("input[type='text']");
	this.backButton=this.jqry.find("input[type='button']").eq(0);
	this.backButton.val("back");
	this.forwardButton=this.jqry.find("input[type='button']").eq(1);
	this.forwardButton.val("forward");
	this.iframe=this.jqry.find("iframe");
	
	this.history=new History();
		
	var u=this;
	this.urlBar.on(
		"keyup", 
		function(event) {
		if (event.keyCode == 13) {
			//alert(this);
			u.load(u.urlBar.val());
			
		}}
	); 
	
	this.backButton.on(
		"click", 
		function(event) {
			try{
				//alert("back");
				//u.iframe[0].contentWindow.history.back();	
				u.load(u.history.back());
			}catch(e){
				alert(e.message);
			}
		}
	);
	
	this.forwardButton.on(
		"click", 
		function(event) {
			try{
				//alert("forward");
				//u.iframe[0].contentWindow.history.forward();
				u.load(u.history.forward());				
			}catch(e){
				alert(e.message);
			}
		}
	);
	
	this.iframe.on(
		"load",
		function(event){
			
			//jQuery.support.cors = true;
			//alert(u.iframe[0].contentWindow.location.href);	
			u.urlBar.val(u.iframe[0].contentWindow.location.href);
			if(u.iframe[0].contentWindow.location.href!=u.history.current()){
				u.history.record(u.iframe[0].contentWindow.location.href);
			}
		}
	)
	
}

UrlBarIframe.prototype.config={
	//UrlBarIframe的HTML模板配置
	"template":{
		"urlBar":"<div class=''><input type='text'></div>",
		"button":"<div class=''><input type='button'></div>",
		"iframe":"<div class=''><iframe class='' src='http://www.baidu.com'></iframe></div>"
	}	
};

UrlBarIframe.prototype.load=function(url){
	//alert(url);
	//this.iframe.attr("src",url);
	this.iframe[0].contentWindow.location.href=url;
}

});


/*
UrlBarIframe.prototype.config={
	//UrlBarIframe的HTML模板配置
	"template":{
		"urlBar":"<div class=''><input type='text'></div>",
		"button":"<div class=''><input type='button'></div>",
		"iframe":"<div class=''><iframe class='' src='http://www.baidu.com'></iframe></div>"
	}	
};

function UrlBarIframe(){
	
	if (typeof jQuery == "undefined") return null;//判断jQuery对象是否已定义
	if (typeof History == "undefined") return null;//判断History对象是否已定义
		
	this.id="";
	this.html="<div class='' id='"+this.id+"'>"+this.config["template"]["urlBar"]+this.config["template"]["button"]+this.config["template"]["button"]+this.config["template"]["iframe"]+"</div>";
	this.jqry=$(this.html);
	
	this.urlBar=this.jqry.find("input[type='text']");
	this.backButton=this.jqry.find("input[type='button']").eq(0);
	this.backButton.val("back");
	this.forwardButton=this.jqry.find("input[type='button']").eq(1);
	this.forwardButton.val("forward");
	this.iframe=this.jqry.find("iframe");
	
	this.history=new History();
		
	var u=this;
	this.urlBar.on(
		"keyup", 
		function(event) {
		if (event.keyCode == 13) {
			//alert(this);
			u.load(u.urlBar.val());
			
		}}
	); 
	
	this.backButton.on(
		"click", 
		function(event) {
			try{
				//alert("back");
				//u.iframe[0].contentWindow.history.back();	
				u.load(u.history.back());
			}catch(e){
				alert(e.message);
			}
		}
	);
	
	this.forwardButton.on(
		"click", 
		function(event) {
			try{
				//alert("forward");
				//u.iframe[0].contentWindow.history.forward();
				u.load(u.history.forward());				
			}catch(e){
				alert(e.message);
			}
		}
	);
	
	this.iframe.on(
		"load",
		function(event){
			
			//jQuery.support.cors = true;
			//alert(u.iframe[0].contentWindow.location.href);	
			u.urlBar.val(u.iframe[0].contentWindow.location.href);
			if(u.iframe[0].contentWindow.location.href!=u.history.current()){
				u.history.record(u.iframe[0].contentWindow.location.href);
			}
		}
	)
	
}

UrlBarIframe.prototype.load=function(url){
	//alert(url);
	//this.iframe.attr("src",url);
	this.iframe[0].contentWindow.location.href=url;
}
*/
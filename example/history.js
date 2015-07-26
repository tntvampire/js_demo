define(function(require, exports, module){

module.exports=History;

function History(){
	this.array=new Array();
	this.index=0;
}

History.prototype.length=function(){
	return this.array.length;
}

History.prototype.record=function(s){
	if(this.index+1==this.length()||0==this.length()){
		this.array.push(s);
	}else{
		this.array.splice(this.index+1,this.length()-this.index-1,s);
	}
	this.index++;
	return this.array[this.index];
}

History.prototype.back=function(){
	if(this.index>0)this.index--;
	return this.array[this.index];
}

History.prototype.forward=function(){
	if(this.index+1<this.length())this.index++;
	return this.array[this.index];	
}

History.prototype.current=function(){
	return this.array[this.index];
}

});

/*
function History(){
	this.array=new Array();
	this.index=0;
}

History.prototype.length=function(){
	return this.array.length;
}

History.prototype.record=function(s){
	if(this.index+1==this.length()||0==this.length()){
		this.array.push(s);
	}else{
		this.array.splice(this.index+1,this.length()-this.index-1,s);
	}
	this.index++;
	return this.array[this.index];
}

History.prototype.back=function(){
	if(this.index>0)this.index--;
	return this.array[this.index];
}

History.prototype.forward=function(){
	if(this.index+1<this.length())this.index++;
	return this.array[this.index];	
}

History.prototype.current=function(){
	return this.array[this.index];
}*/
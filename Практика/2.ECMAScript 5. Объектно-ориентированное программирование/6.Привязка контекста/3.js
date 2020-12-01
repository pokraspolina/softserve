"use strict"
//Напишите аналог метода bind():
function bind(func, context) {
	var s = function(){
		func.call(context);//"копия" контекста, вместо this идет контекст
	}
	return s;
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"

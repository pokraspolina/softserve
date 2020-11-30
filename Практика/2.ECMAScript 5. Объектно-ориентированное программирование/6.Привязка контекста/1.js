"use strict"
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = function(){
	format(user.name);//"Tomundefined"
}
//var tomFormat = format.bind(user); // "<<<Tom>>>"
tomFormat("<<<", ">>>"); 


/*Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().*/

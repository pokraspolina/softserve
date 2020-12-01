"use strict"

var user = {
    name: "Tom"
};

function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}

//тебе надо функция, которая внутри вызовет format с контекстом user
var tomFormat = function(beginMsg, endMsg) {
    format.call(user, beginMsg, endMsg);
}

tomFormat("<<<", ">>>"); 

//2. Метод bind().*/
//var tomFormat = format.bind(user); 		// "<<<Tom>>>"



/*Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().*/

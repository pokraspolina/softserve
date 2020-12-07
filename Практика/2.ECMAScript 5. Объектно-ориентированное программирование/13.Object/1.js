"use strict";
/*Создайте тип объектов Прямоугольник со свойствами
координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf().
Метод toString()должен возвращать строку с описанием
текущего состояния.
Метод valueOf() должен возвращать текущий периметр.*/
function Square(x1,y1,x2,y2) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
}
Square.prototype.toString = function() {
	return `Верхний левый угол (${this.x1};${this.y1}) и нижний правый угол (${this.x2};${this.y2})`;
};
Square.prototype.valueOf = function() {
	let a = this.x2- this.x1;
	let b = this.y1 - this.y2;
	let res = 2 * (a + b);
	return `Периметр прямоугольника ${res}`
};
var s = new Square(2,2,5,1);
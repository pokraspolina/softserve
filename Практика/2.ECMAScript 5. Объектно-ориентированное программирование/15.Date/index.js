'use strict'
/*Напишите функцию addTwoDays(date), которая
принимает объект типа Date и добавляет к дате
данного объекта два дня.*/

function addTwoDays(date) {
	date.setDate(date.getDate() + 2);
	console.log(date);
}
var currentDate = new Date();
addTwoDays(currentDate);

"use strict";
/*Напишите функцию matrixToArray(matrix), которая принимает
двумерный массив (матрицу) matrix, разворачивает двумерный
массив в одномерный и возвращает его. Данное задание
необходимо решить при помощи аккумулирующих методов.*/
function matrixToArray(matrix) {
   // Ваш код
	function reducer(acc, currentValue) {
		return acc + "," + currentValue;
}
	return arr.reduce(reducer);
	// Ваш код
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr.split(",")); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
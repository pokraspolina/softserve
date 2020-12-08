"use strict";
/*Напишите функцию deleteEvenNumbers(array), 
которая принимает массив array, удаляет из массива
array четные числа и возвращает его.*/

function deleteEvenNumbers(array) {
   // Ваш код
	function condition(value) {
		return value % 2 == 1;
	}
	return array.filter(condition);
   // Ваш код
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]


"use strict";
/*Расширьте тип объектов Array методом sortDesc(),
который сортирует массив по убыванию*/

Array.prototype.sortDesc = function() {
		arr.sort();
		arr.reverse();
};
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]
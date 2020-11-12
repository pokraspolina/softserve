// Задание №2.
// Напишите код для "безопасного" вычисления периметра и площади
// прямоугольника.
// Сторонами прямоугольника может быть только число (тип данных Number,
// значения других типов данных нельзя устанавливать), значение которого, строго
// больше 0.
function calc() {
	var a = 4;
	var b = 3;
	var arr = [];
		arr[0] = function (newA) {
			if (newA > 0) {
			a = newA;
			}
		};
		arr[1] = function (newB) {
			if (newB > 0) {
			b = newB;
			}
		};
		arr[2] = function () {
			return (a + b) * 2;
		};
		arr[3] = function () {
			return a * b;
		};
	return arr;
}
var calcP = calc();
calcP[0](9); //подаю на вход в первій индекс 9
calcP[1](3); 
console.log(calcP[2]());
console.log(calcP[3]());


// Задание №1.
// Есть следующее определение функции:
// function add(x, y) {
// return x + y;
// }
// Перепишете определение функции add() используя синтаксис Function
// Expression.
var x = Number(prompt("give me x?"));
var y = Number(prompt("give me y?"));

var add = function (x,y){
	return x + y;
};
add(x,y);
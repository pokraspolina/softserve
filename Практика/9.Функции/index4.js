// Задание №4.
// Напишите функцию calc(a, b, op), которая выполняет над числами a и b одну из
// арифметических операций и возвращает ее результат. Вид операции определяется
// целым числом op: 1 – вычитание, 2 – умножение, 3 – деление, остальные значения –
// сложение.
var a = Number(prompt("give me a?"));
var b = Number(prompt("give me b?"));
var op = Number(prompt("give me op?"));
calc(a, b, op);
function calc(a, b, op){
	switch(op){
		case 1: console.log(a - b);
			break;
		case 2: console.log(a * b);
			break;
		case 3: console.log(a / b);
			break;
		default: console.log(a + b);
			break;
	}
}
// Задание №1.
// Создайте объект calculator с тремя методами:
// 1. read() запрашивает два значения при помощи prompt() и сохраняет их в
// свойствах объекта;
// 2. sum() возвращает сумму этих двух значений;
// 3. mul() возвращает произведение этих двух значений.
var calculator = {
// Ваш код
	read : function(){
		a = Number(prompt("Give me a"));
		b = Number(prompt("Give me b"));
		return a, b;
	},
	a : this.a,
	b : this.b,
	sum : function (){
		sum = a + b;
		return "Сумма: " + sum;

	},
	mul : function (){
		mul = a * b;
		return "Произведение: " + mul;

	}
// Ваш код
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
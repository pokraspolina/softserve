// Задание №1.
// Создайте объект calculator с тремя методами:
// 1. read() запрашивает два значения при помощи prompt() и сохраняет их в
// свойствах объекта;
// 2. sum() возвращает сумму этих двух значений;
// 3. mul() возвращает произведение этих двух значений.
var calculator = {
// Ваш код
	a : 0,
	b : 0,
	read : function(){
		this.a = Number(prompt("Give me a"));
		this.b = Number(prompt("Give me b"));
	},
	
	sum : function (){
		sum = this.a + this.b;
		return "Сумма: " + sum;

	},
	mul : function (){
		mul = this.a * this.b;
		return "Произведение: " + mul;

	}
// Ваш код
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Задание №1.
// Напишите функцию pow(x, n), которая возвращает x в степени n. Иначе говоря,
// умножает x на себя n раз и возвращает результат.
var x = prompt("give me x");
var n = prompt("give me n");
n = Number(n);
x = Number(x);
var mul = 1;
pow(x,n);
function pow(x,n){
	for (var i = 1; i <= n; i++){
		mul = mul * x;
	}
	console.log(mul);
}



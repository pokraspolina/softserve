// Задание №6.
// Даны целые числа a и b (a < b). Выведите все целые числа от a до b
// включительно; при этом число a должно выводиться 1 раз, число a + 1 должно
// выводиться 2 раза и т.д.


var a2 = 5;
var b2 = 10;
var step=1;
for (var i = a2; i <= b2; i++){
	for(var k = 1; k <= step; k++){
		console.log(i);
			}
	step++;
}

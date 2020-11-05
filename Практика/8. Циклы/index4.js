// Задание №4. (for)
// Дано целое число n (n > 0). Найдите произведение n! = 1 * 2 * … * n.
var mul = 1;
for (var k = prompt("введите К?"); k > 0; k--) {
	 mul = mul * k;
}
console.log(mul);
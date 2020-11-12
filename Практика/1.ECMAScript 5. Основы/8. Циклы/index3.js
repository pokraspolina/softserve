// Задание №3. (for)
// Даны два целых числа a и b (a < b). Найдите сумму всех целых чисел от a до b
// включительно.
//a = 4, b = 6 - 4,5,6
var a1 = 4;
var b1 = 6;
var res = 0;
for(var i = a1; i <= b1; i++){
	res = res + i;
}
console.log(res);
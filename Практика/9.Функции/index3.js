// Задание №3.
// Напишите функцию sign(x) целого типа, возвращающую для вещественного
// числа x следующие значения:
// -1, если x < 0;
//  0, если x = 0;
//  1, если x > 0.

var x = prompt("give me x?");
x = Number(x);
sign(x);
function sign(x){
	if (x < 0) {
		return -1;
	} else if (x > 0){
		return 1;
	} else {
		return 0;
	}
}
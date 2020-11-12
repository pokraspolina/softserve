// Задание №2.
// Напишите функцию minMax(x, y), 
// которая возвращает минимальное из x и y.
var x = prompt("give me x?");
var y = prompt("give me y?");
x = Number(x);
y = Number(y);
minMax(x,y);
function minMax(x,y){
	if (x > y){
		return x;
	} else {
		return y;
	}

}
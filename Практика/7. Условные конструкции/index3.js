/*Задание №3.
Даны четыре целых числа, одно из которых отлично от трех других, равных
между собой. Определите порядковый номер числа, отличного от остальных.
*/
var x1 = 2;
var x2 = 3;
var x3 = 2;
var x4 = 2;
if (x1 == x2  && x2 == x3){
	console.log(x4);
} else 	if (x1 == x3  && x3 == x4){
	console.log(x2);
	}
else if (x2 == x3  && x3 == x4){
	console.log(x1);
} else {
	console.log(x3);
	}

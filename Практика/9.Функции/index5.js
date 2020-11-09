// Задание №5.
// Напишите функцию digitN(k, n), 
// которая возвращает n-ю цифру целого
// положительного числа k (цифры в числе 
// нумеруются справа налево). Если количество 
// цифр в числе k меньше n, то функция возвращает -1.

function digitN(k, n){
	for (var i = 1; i < n; i++){
		k = parseInt(k  / 10);
	}
	k = k % 10;
	console.log (k);
	if (k<n){
		console.log( -1);
	}
 }

var k = Number(prompt("give me k?"));
var n = Number(prompt("give me n?"));
digitN(k, n);
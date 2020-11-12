// Задание №1.
// Напишите рекурсивную функцию digitSum(k), которая находит сумму цифр
// целого числа k, не используя циклы.
var sum = 0;
function digitSum(k){
	if(k > 0){
		sum = sum + (k % 10);
		k = parseInt(k /10);
		return digitSum(k);
	} else {
		return sum;
	}
	
}

digitSum(1234567);

console.log(sum);
// Есть объект salaries с зарплатами. Напишите код, который выведет среднее
// значение всех зарплат. Код должен работать с различным количеством зарплат в
// объекте.
// Примеры salaries:
// var salaries = {
// 	John: 100,
// 	Bill: 300,
// 	Mike: 250
// };
var salaries = {
	Cris: 150,
	Brain: 600,
	John: 300,
	Steve: 400,
	Bill: 50
};
var sum = 0;
var k = 0;
for (var key in salaries){
	sum = sum + salaries[key];
	k = k + 1;
}
console.log("Средняя зарплата: " + (sum / k) + " у.е.");

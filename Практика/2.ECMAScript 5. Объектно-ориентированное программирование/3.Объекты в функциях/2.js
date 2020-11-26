'use strict';
/* Напишите функцию, которая принимает в качестве параметра объект salaries 
с зарплатами и возвращает значение максимальной из зарплат.
Код должен работать с различным количеством зарплат в объекте.
Примеры salaries:*/
// var salaries = {
//    John: 100,
//    Bill: 300,
//    Mike: 250
// };
var salaries = {
		Cris: 150,
		Brain: 600,
		John: 300,
		Steve: 400,
		Bill: 5000
	};

function createSalaries(sal) {
    var k = 0;
    for (var key in sal) {
        if (k <= sal[key]) {
            k = sal[key];
        }
    }
    return k;
}

console.log(createSalaries(salaries));



/* Есть массив из 5 объектов типа User. Написать функцию 
которая вернет среднее значение возраста. Добавить имя и возвраст из лекции)
var  info = [
    {
        name :"John", 
        age : 28,
        year : 1,
        lang : [ "Java", "JavaScript", "SQL"],
    }, 
    {
        name :"Bill",
        age : 30,
        year : 5,
        lang : ["HTML", "CSS", "JavaScript"],
    },
    {       
        name :"Mike",
        age : 32,
        year : 4,
        lang : ["Python", "SQL"],
    }
];*/
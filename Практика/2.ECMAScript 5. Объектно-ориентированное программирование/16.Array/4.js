"use strict";
// Есть следующий код:

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
   arrLength[i] = "<li>" + arr[i] + "</li>";
}


console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
// Перепишите данный код, заменив цикл for на метод map().

function li(value){
	return `<li>${value}</li>`
}
console.log(arr.map(li));



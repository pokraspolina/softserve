"use strict";
/*Напишите программу, которая запрашивает у пользователя
строки (prompt()). Ввод строк должен быть завершен,
когда пользователь вводит строку end. Далее программа
проверяет, есть ли в строке цифры, если да, добавляет
в начало строки текст "Numbers: ",
если нет – "No numbers: "*/

/*строки 2: твоя программа запрашивает у пользователя строки
, пока пользователь не введет строку "end". После этого
программа начинает анализировать каждую введенную строку и выводит результат*/
let arr = [];
let value;
while(true){
	value = prompt("Введите что-то");
	if (value == "end") {
		break;
	} else {
				arr[arr.length] = value;
	}
	
}
function condition(value) {
	 return value = Number(value);
	}
console.log(arr);
console.log("Numbers:", arr.filter(condition)); 

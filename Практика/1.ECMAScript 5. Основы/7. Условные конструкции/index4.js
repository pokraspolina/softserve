/*Задание №4.
Дано целое число k. Выведите строку-описание оценки, соответствующей
числу k (1 – "плохо", 2 – "неудовлетворительно", 3 – "удовлетворительно", 4 –
"хорошо", 5 – "отлично"). Если k не лежит в диапазоне 1–5, то вывести строку
"ошибка". */
var k = prompt("Введите чило от 1 до 5?");
k = Number(k);
switch(k){
	case 1: console.log("плохо");
		break;
	case 2: console.log("неудовлетворительно");
		break; 
	case 3: console.log("удовлетворительно");
		break;
	case 4: console.log("хорошо");
		break;
	case 5: console.log("отлично");
		break;
	default: console.log("ошибка");
		break;
}

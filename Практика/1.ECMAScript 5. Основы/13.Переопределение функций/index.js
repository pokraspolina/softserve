// Задание №1.
// Есть следующий код:
function format(data, type) {
    if (type == "number") {
        format = function() {
            return Number(data);
        };
    } else if (type == "boolean") {
        format = function() {
            return Boolean(data);
        };
    } else if (type == "string") {
        format = function() {
            return String(data);
        };
    } else {
        return undefined;
    }
}

// присвоение ссылки на функцию до переопределения
var originFormat = format;
format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"
originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"
originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
/*Допишите код, чтобы функция format(data, type) переопределяла себя в
зависимости от параметра type:
1)Если значением параметра type является строка "number", то
	переопределенная версия функции format() преобразует значение
	параметра data в число и возвращает результат;
2) Если значением параметра type является строка "string", то
	переопределенная версия функции format() преобразует значение
	параметра data в строку и возвращает результат;
3) Если значением параметра type является строка "boolean", то
	переопределенная версия функции format() преобразует значение
	параметра data в логическое значение и возвращает результат;
4) При других значениях параметра type функция format() не переопределяет
	себя.*/
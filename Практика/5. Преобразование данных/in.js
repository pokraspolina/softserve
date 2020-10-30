// Задание №1.
// Есть следующий код:
var x = 1;
var y = 2;
var res1 = 1 + "2"; // Допишите код, необходимо использовать переменные x и y
console.log(res1); // "12"
console.log(typeof res1); // string


var res2 = Boolean(x + y) + String(y);// Допишите код, необходимо использовать переменные x и y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = Boolean(x + y);// Допишите код, необходимо использовать переменные x и y
console.log(res3); // true
console.log(typeof res3); // "boolean"

y = undefined;
var res4 = x / y;// Допишите код, необходимо использовать переменные x и y
console.log(res4); // NaN
console.log(typeof res4); // "number"
// Допишите код, чтобы в консоли браузера появились строки, которые написаны
// в комментариях.

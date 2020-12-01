"use strict"
/*Напишите функцию mul(), которая принимает любое количество 
параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.*/

function mul() {
    var sum = 1;
    var calc = false;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            sum = sum * arguments[i];
            calc = true;
        }
    };
    if (calc == true){
      return sum;
    } else {
      return 0;
    }
    
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//!!!!тут задание на использование arguments!!!

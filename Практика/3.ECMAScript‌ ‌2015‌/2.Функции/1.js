"use strict";
/*Напишите функцию mul(), которая принимает любое
количество параметров разного типа и возвращает
произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.*/
function mul(...rest) {
    let sum = 1;
    let arr = rest.filter((value) => {
        return typeof value === "number"
    });
    if (arr === null || arr.length == 0) {
        return sum = 0;
    } else {
        return arr.reduce((acc, nextV) => {
            return acc + nextV;
        });
    };
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
//Нельзя использовать свойство arguments, но в функцию mul() можно добавить один параметр.
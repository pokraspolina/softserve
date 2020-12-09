"use strict";
//Есть следующий код:
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
// let {names : n, ages : a} = data;
// let [ , name2, , name4] = n;
// let [ , age2, , age4] = a;

let {names : [ , name2, , name4], ages : [ , age2, , age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
/*Допишите код используя деструктуризацию,
чтобы в консоли браузера появились строки,
которые написаны в комментариях.*/


"use strict";
//Есть следующий код:

let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray", 
   fourth: "Bob"
};
let { first: f, third : t, fifth = "Name №5"} = names;
console.log(f); // "Tom"
console.log(t); // "Ray"
console.log(fifth); // "Name №5"

/*Допишите код используя деструктуризацию,
чтобы в консоли браузера появились строки,
которые написаны в комментариях.*/
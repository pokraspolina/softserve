"use strict";
/*Дана строка, которая содержит имена пользователей,
разделенные запятой – "Login1,LOgin2,login3,loGin4".
Разбейте эту строку на массив строк (чтобы отдельно
были логины), и приведите их все в нижний регистр.*/
var str = "Login1, LOgin2, login3, loGin4";
str = str.toLowerCase();
console.log(str.split(" ")); 
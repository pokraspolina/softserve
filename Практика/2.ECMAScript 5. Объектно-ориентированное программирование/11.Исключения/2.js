'use strict'
/*Возьмите функцию sumSliceArray(arr, first, second)
 из предыдущего задания и напишите код, который ее
 использует, но перед самим использованием проверяет
 все параметры на правильность. Таким образом, никогда
 не должны генерироваться исключения, которые есть внутри
 данной функции.*/

function sumSliceArray(arr, first, second) {
    if (typeof first === "number" && first >= 0 &&
        typeof second === "number" && second >= 0) {
        var sum = arr[first] + arr[second];
        return sum;
    } else {
        throw new Error("One of the parameters isn`t a number");
    }
    if (first < arr.length && second < arr.length) {
        return sum;
    } else {
        throw new Error("Number is greater than the length of the array!");
    }
}


function isSumSliceArray(arr, first, second) {
    if (typeof first === "number" &&
        typeof second === "number") {
        sumSliceArray(arr, first, second);
    }
}

var arr = [1, 2, 3, 4, 5];


console.log(isSumSliceArray(arr, 0, 2)); // 4
console.log(isSumSliceArray(arr, 0, 4)); // 6
// console.log(isSumSliceArray(arr, 0, "2"));	// some Error
// console.log(isSumSliceArray(arr, 0, 5)); 		// some Error done

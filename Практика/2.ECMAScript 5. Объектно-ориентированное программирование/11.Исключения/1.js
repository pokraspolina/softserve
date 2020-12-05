'use strict'
/*Напишите функцию sumSliceArray(arr, first, second),
которая принимает массив arr и два числа (first и second)
– порядковые номера элементов массива, которые необходимо
суммировать. Например, если ввели 3 и 5 – суммируются 3-й и 5-й элементы.
Функция должна генерировать исключения если были введены не
числа, и когда одно из чисел, или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите
обработку возможных исключений.*/


function sumSliceArray(arr, first, second) {
    /*... должно быть 2 throw 
    1. - когда вводят не число;
    2. - когда вводят больше длины массива;
    И один return, когда все правильно*/
    if (typeof first === "number" && first >= 0 && typeof second === "number" && second >= 0) {
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
var arr = [1, 2, 3, 4, 5];
// это надо будет в try/ catch обернуть
try {
    var res = sumSliceArray();
    console.log(res);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log(sumSliceArray(arr, 0, 2)); // 4
console.log(sumSliceArray(arr, 0, 4)); // 6
console.log(sumSliceArray(arr, 0, "2")); // some Error
console.log(sumSliceArray(arr, 0, 5)); // some Error done

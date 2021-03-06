'use strict'
/*Задание №1.
Напишите функцию random(min, max, delay, callback), 
которая через delay миллисекунд помещает callback в очередь на выполнение.
Если min меньше max, функция генерирует случайно число
в диапазоне от min до max и передает в callback вторым параметром.
Если min больше max, функция создает объект ошибки и передает
в callback первым параметром.
Для генерации случайных чисел можно использовать метод Math.random().
Примеры использования функции:
*/

function random(min, max, delay, callback) {
    if (min < max) {
        min = Math.ceil(min); //Чтобы включить min
        max = Math.floor(max); //Чтобы включить max
        setTimeout(
            function() {
                callback(null, Math.floor(Math.random() * (max - min + 1)) + min); //Максимум и минимум включаются
            }, delay);
    } else {
        setTimeout(
            function() {
        callback(Error,null);
    }, delay);
    }
}

function Error(){
        console.log("Name:", Error.name);
        console.log("Message:", Error.message);
        console.log("Stack:", Error.stack);
}
random(1, 100, 2000, function(Error, data) {
    if (Error) {
        Error();
    } else {
        console.log(data);
    }
});
random(1000, 100, 3000, function(Error, data) {
    if (Error) {
        Error();
    } else {
        console.log(data);
    }
});
//Через две секунды, на экране должно появится случайной число от 1 до 100.
//Через три секунды, на экране должна появится информация об ошибке.

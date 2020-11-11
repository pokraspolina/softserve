// Задание №1.
// Есть следующий код:
function createArrayIterator(array) {
	function itr() {
		for (var i = 0; i !=arr.lenght; i++){
			return arr[i];
		}
	}
	return itr;
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined
// Допишите код, чтобы функция createArrayIterator() возвращала функцию-
// перечислитель для массива, который задается через параметр array.

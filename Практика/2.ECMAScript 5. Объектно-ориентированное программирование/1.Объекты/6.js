// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет
// свойств и false – если хоть одно свойство есть.
var  user = {
	name:["John", "Bill", "Mike"],
	age:[28, 30, 32],
	experience: [1, 5, 4],
	languages: [
		"Java, JavaScript, SQL",
		"HTML, CSS, JavaScript",
		"Python, SQL"	
	]
}
function isEmpty(obj){
	for(var key in user){
		if (user[key] = 0){
			return true;	// выводит ?!undefined?!
		} else {
			return false;
		}
	}
}

console.log(isEmpty());
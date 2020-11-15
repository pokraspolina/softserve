// Задание №2.
// 1. Создайте новый объект car;
// 2. Добавьте свойство model с любым значением;
// 3. Добавьте свойство speed с любым значением;
// 4. Добавьте метод run(), который выводит сообщение: "model едет со скоростью speed";
// 5. Добавьте метод stop(), который вывод сообщение: "model остановилась";
// Реализуйте 3 версии текущего задания, используя следующие синтаксисы
// создания объектов:


// 1. Стандартный;
var car = {};
car.model = "Toyota";
car.speed = 200;
car.run = function(){
	return(car.model + " едет со скоростью " + car.speed + " км/час");
};
car.stop = function(){
	return(car.model + " остановилась");
};

console.log(car.run());
console.log(car.stop());

// 2. Массивов
var car = {};
car["model"] = "Toyota";
car["speed"] = 200;
car["run"] = function(){
	return (car["model"] + " едет со скоростью " + car["speed"] + " км/час");
	
};
car["stop"]= function(){
	return (car["model"] + " остановилась");
};

console.log(car["run"]());
console.log(car["stop"]());

// 3. Упрощенный.

var car = {
model: "Toyota",
speed: 200,
run: function(){
	return(car.model + " едет со скоростью " + car.speed + " км/час");
},
stop: function(){
	return(car.model + " остановилась");
},
}
console.log(car.run());
console.log(car.stop());
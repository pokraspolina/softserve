"use strict";
/*
Напишите класс Круг и реализуйте следующий функционал:
1.	Определите конструктор, который запрашивает координаты центра круга,
	его радиус и инициализирует объект;
2.	Определите метод получения длины окружности для текущего объекта (L = 2 * π * R);
3.	Определите статический метод, который принимает радиус и возвращает
	длину окружности для заданного радиуса (L = 2 * π * R);
4.	Определите метод получения объекта-круга, который возвращает копию текущего объекта;
5.	Определите статический метод, который принимает
	координаты центра круга, его радиус и возвращает
	объект круга с заданными параметрами;
6.	Определите метод проверки попадания точки в круг;
7.	Определите метод преобразования текущего состояния объекта в символьную строку (toString()).

*/
class Circle{
	constructor(centerX, centerY, radius){
//1
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.dotX;
		this.dotY;
	};
//2
	lenght(radius){
		return 2 * this.radius * Math.PI;
	};
//3
	static lenghtStat(radius){
		return 2 * radius * Math.PI;
	};
//4
	copy(){
		return new Circle();
	};
//5
	static  setter (centerX, centerY, radius){
		return new Circle(centerX, centerY, radius);
	};
//6
	checker (dotX, dotY){
		if(dotX > this.centerX && dotY > this.centerY) {
			let a = dotX - this.centerX;
			let b = dotY - this.centerY;
			let c = Math.sqrt(Math.pow(a) + Math.pow(b));
		};

	};
};
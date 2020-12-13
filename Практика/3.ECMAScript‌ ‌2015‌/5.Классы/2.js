"use strict";
/*Напишите класс Геометрическая фигура, определите
в нем приватные свойства для задания центра фигуры.
Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого класса создайте два новых (наследники)
– Прямоугольник и Круг. В этих классах определите особые
приватные свойства. (Например, длина диагонали для
Прямоугольника и радиус для Круга). В каждый из классов
добавьте публичный метод info(),который выводит на экран
всю доступную информацию о фигуре.*/
class Validator {
    static isNumber(value) {
        if (typeof value == "number" && value > 0) {
            return true;
        } else {
            return false;
        };
    };
};
class GeometryFigure {
	constructor(){
		this.__centerX = 0;
	    this.__centerY = 0;
	}
	get centerX(){
	    return this.__centerX;
	};
	set centerX(value) {
	    if (Validator.isNumber(value)) {
	        this.__centerX = value;
	    };
	};
	get centerY() {
	    return this.__centerY;
	}
	set centerY(value) {
	    if (Validator.isNumber(value)) {
	        this.__centerY = value;
	    };
	}
	info() {
	    console.log(`Положение геометрической фигуры (${this.__centerX};${this.__centerY})`);
	}
};

class Circle extends GeometryFigure {
	constructor(){
		super();
		this.__radius = null;	
	}
	get radius() {
		return this.__radius;
	};
	set radius(value) {
		if (Validator.isNumber(value)) {
		this.__radius = value;
		};
	};
	info() {
		super.info();
		console.log("Радиус:", this.__radius);
	}; 
}

class Rectangle extends GeometryFigure {
	constructor(){
		super();
		this.__diagonal = null;
	}
	get diagonal() {
		return this.__diagonal;
	};
	set diagonal(value) {
		if (Validator.isNumber(value)) {
			this.__diagonal = value;
		};
	};
	info () {
		super.info();
		console.log("Диагональ прямоугольника:", this.__diagonal);
	};
}





const g = new GeometryFigure();
const c = new Circle();
const r = new Rectangle();
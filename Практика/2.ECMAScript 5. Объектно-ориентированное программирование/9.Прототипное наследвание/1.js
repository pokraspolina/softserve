'use strict'
/*Создайте тип объектов Геометрическая фигура,
определите в нем приватные свойства для задания
центра фигуры. Для доступа к этим свойствам определите
необходимые метод/методы.
На основе этого типа создайте два новых типа (наследники)
– Прямоугольник и Круг. В этих типах определите особые 
приватные свойства. (Например, длина диагонали для 
Прямоугольника и радиус для Круга). В каждый из типов
добавьте публичный метод info(), который выводит на 
экран всю доступную информацию о фигуре.
*/
function GeometryFigure() {
    this.__centerX = 0;
    this.__centerY = 0;
};

GeometryFigure.prototype.getCenterX = function() {
    return this.__centerX;
};
GeometryFigure.prototype.setCenterX = function(value) {
    if (this._isNumber(value)) {
        this.__centerX = value;
    };
};
GeometryFigure.prototype.getCenterY = function() {
    return this.__centerY;
};
GeometryFigure.prototype.setCenterY = function(value) {
    if (this._isNumber(value)) {
        this.__centerY = value;
    };
};
GeometryFigure.prototype.info = function() {
    console.log("Положение геометрической фигуры (" + this.__centerX +
        "; " + this.__centerY + ")");
};
GeometryFigure.prototype._isNumber = function(value) {
    if (typeof value === "number" && value > 0) {
        return true;
    } else {
        return false;
    };
};



function Circle() {
    GeometryFigure.call(this)                                   //1. Вызываем конструктор родителя
    this.__radius = null;
}
Circle.prototype = Object.create(GeometryFigure.prototype);     // 2. Перезаписываем прототип
Circle.prototype.constructor = Circle;                          // 3. Возвращаем конструктор
Circle.prototype.getRadius = function() {
    return this.__radius;
};
Circle.prototype.setRadius = function(value) {
    if (this._isNumber(value)) {
        this.__radius = value;
    };
};
Circle.prototype.info = function() {
    GeometryFigure.prototype.info.call(this);
    console.log("Радиус:", this.__radius);
};



function Rectangle() {
    GeometryFigure.call(this);
    this.__diagonal = null;
}
Rectangle.prototype = Object.create(GeometryFigure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getDiagonal = function() {
    return this.__diagonal;
};
Rectangle.prototype.setDiagonal = function(value) {
    if (this._isNumber(value)) {
        this.__diagonal = value;
    };
};
Rectangle.prototype.info = function() {
    GeometryFigure.prototype.info.call(this);
    console.log("Диагональ прямоугольника:", this.__diagonal);
};



var g = new GeometryFigure();
var c = new Circle();
var r = new Rectangle();
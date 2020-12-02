'use strict'
/*Создайте тип объектов Квадрат, определите
защищенное свойство для хранения значения стороны.
Для доступа к этому свойству определите необходимые
метод/методы. Также определите публичный метод, который
возвращает периметр.
На основе этого типа создайте тип Куб и переопределите
метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие
способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).*/

function Square() {
    this.__side = null;
};
Square.prototype._getSide = function() {
    return this.__side;
};
Square.prototype._setSide = function(value) {
    if (typeof value === "number" && value > 0 && !isNaN(value)) {
        this.__side = value;
    }
};
Square.prototype.perimeter = function() {
    return 4 * this.__side;
};

function Cube() {
    Square.call(this);
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
//1. Без расширения (полностью переопределить метод родителя);
Cube.prototype.perimeter1 = function() {
    return 12 * this.__side;
};
//2. С расширением (использовать результат метода родителя для дальнейших расчетов).
Cube.prototype.perimeter2 = function() {
    return 3 * Square.prototype.perimeter.call(this);
}

var sq = new Square();
var cub = new Cube();
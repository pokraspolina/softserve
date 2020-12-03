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
    this._side = null;
};
Square.prototype._getSide = function() {
    return this._side;
};
Square.prototype._setSide = function(value) {
    if (typeof value === "number" && value > 0 && !isNaN(value)) {
        this._side = value;
    }
};
Square.prototype.perimeter = function() {
    return 4 * this._side;
};

function Cube() {
    Square.call(this);
}
Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
//1. Без расширения (полностью переопределить метод родителя);
Cube.prototype.perimeter = function() {
    return 12 * this._side;
};
//2. С расширением (использовать результат метода родителя для дальнейших расчетов).
Cube.prototype.perimeter = function() {
    return 3 * Square.prototype.perimeter.call(this);
}

var sq = new Square();
var cub = new Cube();

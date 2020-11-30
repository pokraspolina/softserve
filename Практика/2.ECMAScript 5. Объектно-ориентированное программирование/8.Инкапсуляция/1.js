'use strict'
/*Создайте тип объектов Аудиоплеер, 
в котором есть приватное свойство громкость звука, 
для доступа к этому свойству реализуйте: 
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер. 
Громкость может быть в диапазоне от 0 до 100.
*/

function Audioplayer() {
    this.__volume = 0;
}
//1. Методы геттер и сеттер;

Audioplayer.prototype.getVolume = function() {
	return this.__volume;
};
Audioplayer.prototype.setVolume = function(value){
	if (value > 0 && value < 100 && !isNaN(value)){
		this.__volume = value;
	}
};

var c = new Audioplayer();

//2.Единый метод геттер-сеттер. 
Audioplayer.prototype.sound = function(value) {
    if (value === undefined) {
        return this.__volume;
    } else if (value > 0 && value < 100 && !isNaN(value)){
        this.__volume = value;
    }
}
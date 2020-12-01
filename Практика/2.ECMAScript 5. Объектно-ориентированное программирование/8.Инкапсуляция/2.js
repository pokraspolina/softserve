'use strict'
/*Создайте тип объектов Сумматор, со следующим функционалом:
1. Приватное свойство __firstNumber;
2. Приватное свойство __secondNumber;
3. Публичное свойство result;
4. Приватный метод __calc(), который записывает 
в result сумму свойств __firstNumber и __secondNumber;
5. Единые методы геттер-сеттер для свойств __firstNumber 
и __secondNumber, во время работы методов как сеттер, 
должна происходить валидация (устанавливать можно только 
значения типа Number), если валидация происходит успешно, 
должен вызываться метод __calc(). Получается, что при успешной
установке либо __firstNumber либо __secondNumber, происходит перерасчет result.
*/
function Summator(){
	this.__firstNumber = 0;
	this.__secondNumber = 0;
	this.result = 0;
};
Summator.prototype.__calc = function(){
	this.result = this.__firstNumber + this.__secondNumber;
};
Summator.prototype.getFirstNumber = function(){
	return this.__firstNumber;
};
Summator.prototype.setFirstNumber = function(value){
	if(this._Validator(value)){
		this.__firstNumber = value;
		this.__calc();
	}
};
Summator.prototype.getSecondNumber = function(){
	return this.__secondNumber;
};
Summator.prototype.setSecondNumber = function(value){
	if(this._Validator(value)){
		this.__secondNumber = value;
		this.__calc();
	}
};
Summator.prototype._Validator = function(value){ // не работает с контекстом
	if(typeof value === "number" && !isNaN(value)){
		return true;		
	} else {
		return false;
	}
}

var s = new Summator();

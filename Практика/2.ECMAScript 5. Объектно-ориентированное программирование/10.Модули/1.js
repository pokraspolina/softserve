'use strict'
/*Напишите код для "безопасного" вычисления периметра
и площади прямоугольника в виде модуля.
Сторонами прямоугольника может быть только число
(тип данных Number, значения других типов данных
нельзя устанавливать), значение которого, строго больше 0.*/

var perimeter = (function () {
	   var firstNumber;// = 4;
	   var secondNumber;// = 5;
	   function operation(firstNumber, secondNumber) {
	      return 2 * (firstNumber + secondNumber);
	   }
   return {
      setFirstNumber: function (number) {
      	if(typeof number === "number" && number > 0){
         firstNumber = number;
      	}
      },
      setSecondNumber: function (number) {
      	if(typeof number === "number" && number > 0){
         secondNumber = number;
      	}
      },
      operation: operation
      
   }
}());




var square = (function () {
	   var firstNumber;// = 4;
	   var secondNumber;// = 5;
	   function operation(firstNumber, secondNumber) {
	      return firstNumber * secondNumber;
	   }
   return {
      setFirstNumber: function (number) {
      	if(typeof number === "number" && number > 0){
         firstNumber = number;
      	}
      },
      setSecondNumber: function (number) {
      	if(typeof number === "number" && number > 0){
         secondNumber = number;
      	}
      },
      operation: operation
      
   }
}());

console.log(perimeter.operation(5,true))//18
console.log(square.operation(5,4))//20
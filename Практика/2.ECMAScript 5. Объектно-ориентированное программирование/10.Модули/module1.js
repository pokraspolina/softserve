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
"use strict";
//Есть следующий код:
let obj = {
   name: "obj",
   print: function () {
      return () => {console.log(this.name)};
   }
};
function multiCaller(func, count) {
   for (let i = 0; i < count; i++) {
      func();
   }
}
multiCaller(obj.print(), 3);  // "obj", 3 раза
/*Допишите код используя стрелочные функции,
чтобы в консоли браузера появились строки,
которые написаны в комментариях.*/

// Задание №3.
// 1. Создайте новый объект tv;
// 2. Добавьте свойство currentChannel со значением 1;
// 3. Добавьте метод nextChannel(), который увеличивает currentChannel на
// единицу;
// 4. Добавьте метод previousChannel(), который уменьшает currentChannel на
// единицу;
// 5. Добавьте метод setChannel(number), который переходит на канал по номеру.

var tv = {
	currentChannel : 1,
	nextChannel : function(){
		tv.currentChannel = tv.currentChannel + 1;
	},
	previousChannel : function(){
		tv.currentChannel = tv.currentChannel -1;
	},
	setChannel :function(number){
		tv.currentChannel = number;
	}
}
console.log(tv.currentChannel);// 1
console.log(tv.nextChannel());// 2
console.log(tv.previousChannel());//1
console.log(tv.setChannel(5));// 5

"use strict";
/*1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.*/

let tv = {
    currentChannel: 1,
    nextChannel() {
        console.log(tv.currentChannel = tv.currentChannel + 1);
    },
    previousChannel() {
        console.log(tv.currentChannel = tv.currentChannel - 1);
    },
    setChannel(number) {
        console.log(tv.currentChannel = number);
    }
}
console.log(tv.currentChannel);// 1
tv.nextChannel();// 2
tv.previousChannel();//1
tv.setChannel(5);// 5
tv.nextChannel();// 6
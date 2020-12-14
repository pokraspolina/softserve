"use strict";
/*1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.*/

let tv = {
    currentChannel: 1,
    nextChannel() {
        tv.currentChannel = tv.currentChannel + 1;
    },
    previousChannel() {
        tv.currentChannel = tv.currentChannel - 1;
    },
    setChannel(number) {
        tv.currentChannel = number;
    }
}
console.log(tv.currentChannel);
tv.nextChannel();
console.log(tv.currentChannel);
tv.previousChannel();
console.log(tv.currentChannel);
tv.setChannel(5);
console.log(tv.currentChannel);
tv.nextChannel();
console.log(tv.currentChannel);
// Задание №1.
// Создайте тип объектов MP3 при помощи конструкторов объектов.
function Music (name, volume, currentMusic, status) {
    this.name = name;
    this.volume = volume;
    this.currentMusic = currentMusic;
    this.status = status;
    this.on = function() {
        console.log("Текущий статус  MP3 " + this.name + " - " + this.status);
    };
    this.increaseVolume = function() {
        this.volume++;
        console.log("Текущий уровень музыки " + this.volume);
    };
    this.decreaseVolume = function() {
         this.volume--;
         console.log("Текущий уровень музыки " + this.volume);
    },
    this.nextMusic = function() {
         this.currentMusic++;
         console.log("Сейчас играет трек № " + this.currentMusic);
    },
    this.prevMusic = function() {
         this.currentMusic--;
         console.log("Сейчас играет трек № " + this.currentMusic);
    };
}

var lg = new Music("LG", 5, 3, true);
// var samsung = new Music("Samsung", 1, 1, false);

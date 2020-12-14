"use strict";
/*Напишите класс, который описывает MP3 плеер.*/
class Music {
    constructor(name, volume, currentMusic, status) {
      this.name = name;
      this.volume = volume;
      this.currentMusic = currentMusic;
      this.status = status;
   }
    on() {
        this.status = true;
        return "Текущий статус MP3 " + this.name + " - " + this.status;
    };
    increaseVolume() {
        this.volume++;
        return "Текущий уровень музыки " + this.volume;
    };
    decreaseVolume() {
        this.volume--;
        return "Текущий уровень музыки " + this.volume;
    };
    nextMusic() {
        this.currentMusic++;
        return "Сейчас играет трек № " + this.currentMusic;
    };
    prevMusic() {
        this.currentMusic--;
        return "Сейчас играет трек № " + this.currentMusic;
    };
}

let lg = new Music("LG", 5, 3, true);
console.log(lg.on());
console.log(lg.increaseVolume());
console.log(lg.nextMusic());

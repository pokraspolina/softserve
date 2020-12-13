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
        console.log("Текущий статус MP3 " + this.name + " - " + this.status);
    };
    increaseVolume() {
        this.volume++;
        console.log("Текущий уровень музыки " + this.volume);
    };
    decreaseVolume() {
        this.volume--;
        console.log("Текущий уровень музыки " + this.volume);
    };
    nextMusic() {
        this.currentMusic++;
        console.log("Сейчас играет трек № " + this.currentMusic);
    };
    prevMusic() {
        this.currentMusic--;
        console.log("Сейчас играет трек № " + this.currentMusic);
    };
}

let lg = new Music("LG", 5, 3, true);
lg.on();
lg.increaseVolume();
lg.nextMusic();

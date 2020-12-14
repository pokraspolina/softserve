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
    };
    increaseVolume() {
        this.volume++;
    };
    decreaseVolume() {
        this.volume--;
    };
    nextMusic() {
        this.currentMusic++;
    };
    prevMusic() {
        this.currentMusic--;
    };
}

let lg = new Music("LG", 5, 3, true);
console.log(lg);
lg.on();
lg.increaseVolume();
lg.nextMusic();
console.log(lg);

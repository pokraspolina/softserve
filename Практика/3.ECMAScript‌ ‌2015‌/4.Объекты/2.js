"use strict";
//Создайте объект, который описывает MP3 плеер.

let music = {
	name : "Samsung",
	volume : 2,
	currentMusic: 1,
	status : false,
	on() {
		this.status = true;
	    return "Текущий статус MP3 " + this.name + " - " + this.status;
	},
	increaseVolume() {
		this.volume++;
		return "Текущий уровень музыки " + this.volume;
	},
	decreaseVolume() {
		this.volume--;
		return "Текущий уровень музыки " + this.volume;
	},
	nextMusic() {
		this.currentMusic++;
		return "Сейчас играет трек № " + this.currentMusic;
	},
	prevMusic() {
		this.currentMusic--;
		return "Сейчас играет трек № " + this.currentMusic;
	}
}

console.log(music.on());
console.log(music.increaseVolume());
console.log(music.nextMusic());

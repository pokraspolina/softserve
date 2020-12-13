"use strict";
//Создайте объект, который описывает MP3 плеер.

let music = {
	name : "Samsung",
	volume : 2,
	currentMusic: 1,
	status : false,
	on() {
		this.status = true;
	    console.log("Текущий статус MP3 " + this.name + " - " + this.status);
	},
	increaseVolume() {
		this.volume++;
		console.log("Текущий уровень музыки " + this.volume);
	},
	decreaseVolume() {
		this.volume--;
		console.log("Текущий уровень музыки " + this.volume);
	},
	nextMusic() {
		this.currentMusic++;
		console.log("Сейчас играет трек № " + this.currentMusic);
	},
	prevMusic() {
		this.currentMusic--;
		console.log("Сейчас играет трек № " + this.currentMusic);
	}
}

music.on();
music.increaseVolume();
music.nextMusic();

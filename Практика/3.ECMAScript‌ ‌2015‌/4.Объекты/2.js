"use strict";
//Создайте объект, который описывает MP3 плеер.

let music = {
	name : "Samsung",
	volume : 2,
	currentMusic: 1,
	status : false,
	on() {
		this.status = true;
	},
	increaseVolume() {
		this.volume++;
	},
	decreaseVolume() {
		this.volume--;
	},
	nextMusic() {
		this.currentMusic++;
	},
	prevMusic() {
		this.currentMusic--;
	}
}

console.log(music);
music.on();
music.increaseVolume();
music.nextMusic();
console.log(music);
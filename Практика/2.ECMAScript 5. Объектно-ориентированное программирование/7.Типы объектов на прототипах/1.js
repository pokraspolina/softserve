'use strict'
/*Создайте тип объектов MP3 при помощи прототипов.*/

function Music(name, currentMusic, volume, status) {
        this.name = name;
        this.currentMusic = currentMusic;
        this.volume = volume;
        this.status = status;
}
Music.prototype.getStatus = function() {
        	return this.status;
};
Music.prototype.increaseVolume = function() {
            this.volume++;
};
Music.prototype.decreaseVolume = function() {
            this.volume--;
};
Music.prototype.nextMusic = function() {
        	this.currentMusic++;
};
Music.prototype.prevMusic = function() {
        	this.currentMusic--;
}

var s = new Music("LG", 1, 8, "on");

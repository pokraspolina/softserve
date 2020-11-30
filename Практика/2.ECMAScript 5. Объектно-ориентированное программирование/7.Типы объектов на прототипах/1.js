'use strict'
/*Создайте тип объектов MP3 при помощи прототипов.*/

function Music(name, currentMusic, volume, status) {
        name = name;
        currentMusic = currentMusic;
        volume = volume;
        status = status;
}
Music.prototype.off = function() {
        	this.status;
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
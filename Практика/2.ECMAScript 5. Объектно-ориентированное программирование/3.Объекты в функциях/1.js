'use strict'
/*Задание №1.
Напишите функцию для создания объектов, которые описывают MP3 плеер.*/

function craeteMP3(name) {
    return {
        currentMusic: 1,
        volume: 1,
        name: name,
        status: false,
        on: function() {
        	!this.status;
        },
        off: function() {
        	this.status;
        },
        increaseVolume: function(step) {
            this.volume += step;
        },
        decreaseVolume: function(step) {
            this.volume -= step;
        },
        nextMusic: function() {
        	this.currentMusic++;
        },
        prevMusic: function() {
        	this.currentMusic--;
        },
    }

}
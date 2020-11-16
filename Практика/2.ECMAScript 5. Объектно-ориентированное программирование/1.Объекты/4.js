// Создайте объект, который описывает MP3 плеер.
var MP3 = {
	currentMusic : 1,
	stopMusic : null,
	nextMusic : function(){
		MP3.currentMusic = MP3.currentMusic + 1;
		},
	previousMusic : function(){
		MP3.currentMusic = MP3.currentMusic -1;
		},
}

console.log("Сейчас играет песня: " + MP3.currentMusic);// 1
console.log(MP3.nextMusic());// 2
console.log(MP3.previousMusic());//1
console.log(MP3.stopMusic());//1

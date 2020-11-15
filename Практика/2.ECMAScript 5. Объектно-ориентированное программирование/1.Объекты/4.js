// Создайте объект, который описывает MP3 плеер.
var MP3 = {
	currentMusic : 1,
	nextMusic : function(){
		MP3.currentMusic = MP3.currentMusic + 1;
		return ("Текущая песня " + MP3.currentMusic);
	},
	previousMusic : function(){
		MP3.currentMusic = MP3.currentMusic -1;
		return ("Текущая песня " +  MP3.currentMusic);
	},
	stopMusic: function(){
		MP3.stopMusic = MP3.currentMusic;
		return ("На паузе песня " + MP3.stopMusic);
	}
}

console.log("Сейчас играет песня: " + MP3.currentMusic);// 1
console.log(MP3.nextMusic());// 2
console.log(MP3.previousMusic());//1
console.log(MP3.stopMusic());//1
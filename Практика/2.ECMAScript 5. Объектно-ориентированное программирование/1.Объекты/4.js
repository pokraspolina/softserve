// Создайте объект, который описывает MP3 плеер.
var MP3 = {
	currentMusic : 1,
	stopMusic : null,
	playPause : function(){
		MP3.playPause = MP3.currentMusic;
	}
	soundMusic : function (i){
		MP3.soundMusic = 1;
		if (i = "+"){
			MP3.soundMusic = MP3.soundMusic + 1;
		} else {
			MP3.soundMusic = MP3.soundMusic - 1;
		}
	}
	nextMusic : function(){
		MP3.currentMusic = MP3.currentMusic + 1;
	},
	previousMusic : function(){
		MP3.currentMusic = MP3.currentMusic -1;
	}
}

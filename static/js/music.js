var musicHandler = document.getElementById('musicHandler');
musicHandler.innerText = 'Play Music';
var audio = new Audio('https://file-examples.com/storage/fec4d074f662eaafa9df020/2017/11/file_example_MP3_5MG.mp3');

function playMusic() {
    audio.play();
    musicHandler.innerText = 'Pause Music';
}

function pauseMusic(){
    audio.pause();
    musicHandler.innerText = 'Play Music';
}

//if music is playing, pause it, else play it
musicHandler.addEventListener('click', function(){
    if (musicHandler.innerText === 'Play Music') {
        playMusic();
    } else {
        pauseMusic();
    }
}
);
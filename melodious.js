let container = document.getElementById('container');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let progressBar = document.getElementById('progressBar');
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let audioElement = new Audio('songs/Arcade.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songIndex = 0;
// let body=document.getElementsByTagName('body');
let songs = [
    { songName: "Arcade", filePath: "songs/Arcade.mp3", coverPath: "./imgs/arcade.jpg" },
    { songName: "Before you go", filePath: "songs/Calcum_Scott_-_You_Are_The_Reason.mp3", coverPath: "./imgs/before you go.jpg" },
    { songName: "I wanna grow old with you", filePath: "songs/Westlife_-_I_Wanna_Grow_Old_With_You_CeeNaija.com_.mp3", coverPath: "./imgs/grow old with you.jpg" },
    { songName: "Love is gone", filePath: "songs/Slander-Love-Is-Gone-7b.mp3", coverPath: "./imgs/love is gone.jpg" },
    { songName: "Seasons", filePath: "songs/Rival x Cadmium - Seasons (feat. Harley Bird) [NCS Release].mp3", coverPath: "./imgs/seasons.png" },
    { songName: "Senorita", filePath: "songs/Senorita.mp3", coverPath: "./imgs/senorita.jpg" },
    { songName: "You broke me first", filePath: "songs/Tate McRae – you broke me first.mp3", coverPath: "./imgs/you broke me first.jpg" },
    { songName: "you are the reason", filePath: "songs/Calcum_Scott_-_You_Are_The_Reason.mp3", coverPath: "./imgs/you r d rsn.jpg" },

]
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
    }
});
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;

})
progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        console.log('clicked');
        // if(e.target.classList=='fa-play-circle'){}
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[songIndex - 1].filePath;
        masterSongName.innerText = songs[songIndex - 1].songName;
        if (audioElement.paused) {
            console.log('if')
            audioElement.play();
            audioElement.currentTime = 0;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else if (!audioElement.paused) {
            console.log('else');
            audioElement.pause();
            audioElement.currentTime = 0;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
    })
    // element.addEventListener('')

});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex - 1].filePath;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;

    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex - 1].filePath;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;

    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

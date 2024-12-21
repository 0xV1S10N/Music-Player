const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeControl = document.getElementById('volume');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const songCover = document.getElementById('song-cover');

const songs = [
    { title: "Song 1", artist: "Artist 1", src: "song1.mp3", cover: "cover1.jpg" },
    { title: "Song 2", artist: "Artist 2", src: "song2.mp3", cover: "cover2.jpg" },
    { title: "Song 3", artist: "Artist 3", src: "song3.mp3", cover: "cover3.jpg" }
];

let currentSongIndex = 0;

function loadSong(song) {
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    songCover.src = song.cover; // Load cover image
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
}

function changeVolume() {
    audioPlayer.volume = volumeControl.value;
}

playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
volumeControl.addEventListener('input', changeVolume);

// Load the first song initially
loadSong(songs[currentSongIndex]);

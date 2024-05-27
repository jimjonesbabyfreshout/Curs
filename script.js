const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', () => {
    playPauseBtn.classList.add('playing');
});

audio.addEventListener('pause', () => {
    playPauseBtn.classList.remove('playing');
});

audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Load metadata to display duration correctly
audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});
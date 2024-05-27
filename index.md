# Deuteronomy 27

<div class=“audio-player”><audio controls id=“audio” preload=“metadata”><source src=“https://www.dropbox.com/scl/fi/b8jxpcutixove5fwvb74q/20240526_165901593.mp3?rlkey=jdljtwpxgqqvvyv3pflsrxdy1&amp;raw=1” type=“audio/mpeg”></audio><div class=“controls”><button id=“play-pause-btn” class=“play-pause-btn”></button><div class=“progress-container”><div id=“progress” class=“progress”></div></div></div></div>

<style>
/* Dark Mode Styles */
body {
    background-color: #121212;
    color: #ffffff;
    font-family: ‘Arial’, sans-serif;
    margin: 0;
    padding: 20px;
}

.audio-player {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: inline-block;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
}

.controls {
    display: flex;
    align-items: center;
}

.play-pause-btn {
    width: 50px;
    height: 50px;
    background: url(‘play-icon.png’) center no-repeat;
    background-size: contain;
    border: none;
    cursor: pointer;
    margin-right: 15px;
}

.play-pause-btn.playing {
    background: url(‘pause-icon.png’) center no-repeat;
    background-size: contain;
}

.progress-container {
    flex: 1;
    height: 5px;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 10px;
}

.progress {
    width: 0;
    height: 100%;
    background-color: #1db954;
    border-radius: 5px;
    transition: width 0.1s;
}

.time {
    font-size: 0.9em;
}
</style>

<script>
const audio = document.getElementById(‘audio’);
const playPauseBtn = document.getElementById(‘play-pause-btn’);
const progressContainer = document.querySelector(‘.progress-container’);
const progress = document.getElementById(‘progress’);
const currentTimeEl = document.getElementById(‘current-time’);
const durationEl = document.getElementById(‘duration’);

playPauseBtn.addEventListener(‘click’, () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener(‘play’, () => {
    playPauseBtn.classList.add(‘playing’);
});

audio.addEventListener(‘pause’, () => {
    playPauseBtn.classList.remove(‘playing’);
});

audio.addEventListener(‘timeupdate’, () => {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

progressContainer.addEventListener(‘click’, (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? ‘0’ : ‘’}${seconds}`;
}

// Load metadata to display duration correctly
audio.addEventListener(‘loadedmetadata’, () => {
    durationEl.textContent = formatTime(audio.duration);
});
</script>

## 1. Moses and the Elders Command the People

Moses and the elders of Israel commanded the people: “Keep all these commands that I give you today.”

## 2. Instructions for Setting Up Stones

“When you have crossed the Jordan into the land the LORD your God is giving you, set up some large stones and coat them with plaster.”

## 3. Writing the Law

Write on them all the words of this law when you have crossed over to enter the land the LORD your God is giving you, a land flowing with milk and honey, just as the LORD, the God of your fathers, promised you.

## 4. Setting Up Stones on Mount Ebal

And when you have crossed the Jordan, set up these stones on Mount Ebal, as I command you today, and coat them with plaster.

## 5. Building the Altar

Build there an altar to the LORD your God, an altar of stones. Do not use any iron tool upon them.

## 6. Offering Sacrifices

Build the altar of the LORD your God with fieldstones and offer burnt offerings on it to the LORD your God.

## 7. Fellowship Offerings

Sacrifice fellowship offerings there, eating them and rejoicing in the presence of the LORD your God.

## 8. Clear Writing of the Law

And you shall write very clearly all the words of this law on these stones you have set up.”

## 9. Moses and the Priests Speak

Then Moses and the priests, who are Levites, said to all Israel, “Be silent, O Israel, and listen! You have now become the people of the LORD your God.”

## 10. Obedience to God’s Commands

Obey the LORD your God and follow his commands and decrees that I give you today.”

## 11. Moses Commands the People

On the same day Moses commanded the people:

## 12. Mount Gerizim and Mount Ebal

“When you have crossed the Jordan, these tribes shall stand on Mount Gerizim to bless the people: Simeon, Levi, Judah, Issachar, Joseph, and Benjamin.”

## 13. Pronouncing Curses

And these tribes shall stand on Mount Ebal to pronounce curses: Reuben, Gad, Asher, Zebulun, Dan, and Naphtali.

## 14. Levites’ Recitation

The Levites shall recite to all the people of Israel in a loud voice:

## 15. Curses for Idolatry

“Cursed is the man who carves an image or casts an idol—a thing detestable to the LORD, the work of the craftsman’s hands—and sets it up in secret.” Then all the people shall say, “Amen!”

## 16. Curses for Dishonoring Parents

“Cursed is the man who dishonors his father or his mother.” Then all the people shall say, “Amen!”

## 17. Curses for Moving Boundary Stones

“Cursed is the man who moves his neighbor’s boundary stone.” Then all the people shall say, “Amen!”

## 18. Curses for Leading the Blind Astray

“Cursed is the man who leads the blind astray on the road.” Then all the people shall say, “Amen!”

## 19. Curses for Withholding Justice

“Cursed is the man who withholds justice from the alien, the fatherless, or the widow.” Then all the people shall say, “Amen!”

## 20. Curses for Sexual Immorality

“Cursed is the man who sleeps with his father’s wife, for he dishonors his father’s bed.” Then all the people shall say, “Amen!”

## 21. Curses for Bestiality

“Cursed is the man who has sexual relations with any animal.” Then all the people shall say, “Amen!”

## 22. Curses for Incest

“Cursed is the man who sleeps with his sister, the daughter of his father, or the daughter of his mother.” Then all the people shall say, “Amen!”

## 23. Curses for Sleeping with Mother-in-law

“Cursed is the man who sleeps with his mother-in-law.” Then all the people shall say, “Amen!”

## 24. Curses for Secret Murder

“Cursed is the man who kills his neighbor secretly.” Then all the people shall say, “Amen!”

## 25. Curses for Bribery to Kill

“Cursed is the man who accepts a bribe to kill an innocent person.” Then all the people shall say, “Amen!”

## 26. Curses for Not Upholding the Law

“Cursed is the man who does not uphold the words of this law by carrying them out.” Then all the people shall say, “Amen!”

_(Traditionally peace offerings)_

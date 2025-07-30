const audio = document.getElementById("audio-player");
const progress = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const playBtn = document.getElementById("playBtn");
const likeBtn = document.getElementById("likeBtn");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

audio.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
  progress.style.background = `linear-gradient(to right, #b16b51 ${percent}%, #333 ${percent}%)`;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  const percent = progress.value;
  audio.currentTime = (percent / 100) * audio.duration;
  progress.style.background = `linear-gradient(to right, #b16b51 ${percent}%, #333 ${percent}%)`;
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  } else {
    audio.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }
});

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("fa-regular");
  likeBtn.classList.toggle("fa-solid");
  likeBtn.classList.toggle("liked");
});

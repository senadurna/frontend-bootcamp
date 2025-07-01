const sounds = {
  A: "sounds/clap.wav",
  S: "sounds/hihat.wav",
  D: "sounds/kick.wav",
  F: "sounds/openhat.wav",
  G: "sounds/boom.wav",
  H: "sounds/ride.wav",
  J: "sounds/snare.wav",
  K: "sounds/tom.wav",
  L: "sounds/tink.wav"
};

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;
    playSound(key);
  });
});

document.addEventListener("keydown", e => {
  const key = e.key.toUpperCase();
  if (sounds[key]) {
    playSound(key);
  }
});

function playSound(key) {
  const audio = new Audio(sounds[key]);
  audio.currentTime = 0;
  audio.play();

  const button = document.querySelector(`button[data-key="${key}"]`);
  button.classList.add("playing");
  setTimeout(() => button.classList.remove("playing"), 100);
}

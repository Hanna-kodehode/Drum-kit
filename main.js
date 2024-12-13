//Link namn til keyboard knappar
const drumParts = {
  clap: "1",
  hihat: "2",
  kick: "3",
  openhat: "4",
  ride: "5",
  snare: "6",
  tink: "7",
  tom: "8",
  vibraslap: "9",
};

// Muse klikk
const drumBoxes = document.querySelectorAll(".drum-box");

drumBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    const soundName = box.id.toLowerCase();
    playSound(soundName);
  });
});

//Keyboard
window.addEventListener("keydown", (event) => {
  for (let soundName in drumParts) {
    if (event.key == drumParts[soundName]) {
      playSound(soundName);
      break; //sei ifra at loopen ikkje trenger å runne meir etter matchen er funnet
    }
  }
});

// Hent/spel lyd
function playSound(soundName) {
  const audio = new Audio(`./sounds/${soundName}.wav`);
  audio.play();
}

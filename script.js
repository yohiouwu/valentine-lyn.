const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPause");
const bearKiss = document.getElementById("bearKiss");
const bearKiss2 = document.getElementById("bearKiss2");
const rosesContainer = document.getElementById("roses-container");
const picsTogether = document.getElementById("picsTogether");

let noCount = 0;
const noTexts = [
  "No 🙄",
  "Wait… 😳",
  "Are you sure?",
  "PLEASE Lyn 😭",
  "Don’t break my heart 💔",
  "I’m begging 🥺",
  "THIS IS PAINFUL 😩",
  "You HAVE to say yes 💘"
];

// ▶️ Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    music.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// 😈 No button chaos
noBtn.addEventListener("mouseover", () => {
  noCount++;
  if (noCount < noTexts.length) {
    noBtn.textContent = noTexts[noCount];
  }

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = `scale(${1 - noCount * 0.05})`;
});

// 💖 YES BUTTON
yesBtn.addEventListener("click", () => {
  music.currentTime = 24;
  music.volume = 0;
  music.play();
  playPauseBtn.textContent = "⏸️";
  fadeInMusic();

  finalMessage.classList.remove("hidden");
  bearKiss.classList.remove("hidden");

  setTimeout(() => {
    bearKiss2.classList.remove("hidden");
  }, 3000);

  picsTogether.classList.remove("hidden");

  document.querySelector("h2").textContent =
    "yaayayyayayyayayayayaya :3";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  for (let i = 0; i < 50; i++) createHeart(true);
});

// 🎶 Fade-in
function fadeInMusic() {
  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 1) {
      volume += 0.02;
      music.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

// 💕 Hearts
function createHeart(final = false) {
  const heart = document.createElement("span");
  heart.textContent = final ? "💖" : "💌";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = final ? "30px" : "40px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

// 🌹 Roses
function createRose() {
  const rose = document.createElement("span");
  rose.className = "rose";
  rose.textContent = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rosesContainer.appendChild(rose);
  setTimeout(() => rose.remove(), 9000);
}
setInterval(createRose, 450);

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPause");
const bearKiss = document.getElementById("bearKiss");
const bearKiss2 = document.getElementById("bearKiss2");
const rosesContainer = document.getElementById("roses-container");
const picsLeft = document.getElementById("picsLeft");
const picsRight = document.getElementById("picsRight");

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

// ▶️ Play / Pause button
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

// 💖 YES BUTTON — music starts at 0:24 with fade-in
yesBtn.addEventListener("click", () => {
  // Start music at 0:24
  music.currentTime = 24;
  music.volume = 0;
  music.play();
  playPauseBtn.textContent = "⏸️";
  fadeInMusic();

  // Show final message & bears
  finalMessage.classList.remove("hidden");
  bearKiss.classList.remove("hidden");
  bearKiss2.classList.remove("hidden");

  // Slide-in pics from sides
  picsLeft.classList.remove("hidden");
  picsRight.classList.remove("hidden");
  picsLeft.classList.add("slide-in-left");
  picsRight.classList.add("slide-in-right");

  // Change main question text
  document.querySelector("h2").textContent =
    "yaayayyayayyayayayayaya :3";

  // Hide buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Hearts
  for (let i = 0; i < 40; i++) createHeart(true);
});

// 🎶 Smooth fade-in music
function fadeInMusic() {
  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 1) {
      volume += 0.02;
      music.volume = volume;
    } else {
      music.volume = 1;
      clearInterval(fade);
    }
  }, 100);
}

// 💕 Hearts
function createHeart(final = false) {
  const heart = document.createElement("span");
  heart.textContent = final ? "💖" : "💌";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = "8s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(() => createHeart(), 300);

// 🌹 Roses
function createRose() {
  const rose = document.createElement("span");
  rose.className = "rose";
  rose.textContent = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = "6s";
  rosesContainer.appendChild(rose);
  setTimeout(() => rose.remove(), 9000);
}

setInterval(createRose, 450);

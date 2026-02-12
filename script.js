const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPause");
const bearKiss = document.getElementById("bearKiss");
const bearKiss2 = document.getElementById("bearKiss2");
const rosesContainer = document.getElementById("roses-container");

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
  // Music
  music.currentTime = 24;
  music.volume = 0;
  music.play();
  playPauseBtn.textContent = "⏸️";
  fadeInMusic();

  // Show content
  finalMessage.classList.remove("hidden");
  bearKiss.classList.remove("hidden");
  bearKiss2.classList.remove("hidden");

  document.querySelector("h2").textContent =
    "yaayayyayayyayayayayaya :3";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // 💕 Hearts explode around button
  const rect = yesBtn.getBoundingClientRect();
  for (let i = 0; i < 50; i++) {
    setTimeout(() => createHeart(true, rect.left + rect.width/2, rect.top + rect.height/2), i * 50);
  }

  // 💋 Aggressive MWAH spam
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createMwah();
      if (Math.random() > 0.6) createMwah();
    }, i * 80);
  }
});

// 🎶 Fade-in music
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
function createHeart(final = false, xPos=null, yPos=null) {
  const heart = document.createElement("span");
  heart.textContent = final ? "💖" : "💌";

  heart.style.left = xPos!==null ? `${xPos}px` : Math.random() * 100 + "vw";
  heart.style.top = yPos!==null ? `${yPos}px` : "100vh";
  heart.style.position = "fixed";
  heart.style.fontSize = Math.random() * 26 + 20 + "px";
  heart.style.animationDuration = "2s";
  heart.style.zIndex = "10";

  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
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

// 💋 MWAH FUNCTION
function createMwah() {
  const mwah = document.createElement("span");
  mwah.textContent = "mwah Lyn 💋";

  mwah.style.position = "fixed";
  mwah.style.left = Math.random() * 100 + "vw";
  mwah.style.top = Math.random() * 100 + "vh";
  mwah.style.fontSize = Math.random() * 26 + 20 + "px";
  mwah.style.fontWeight = "bold";
  mwah.style.color = "#ff2f6d";
  mwah.style.zIndex = "10";
  mwah.style.pointerEvents = "none";

  const rotate = Math.random() * 60 - 30;
  mwah.style.transform = `rotate(${rotate}deg)`;

  mwah.style.animation =
    "mwahFloat 2.5s ease-out forwards, mwahShake 0.4s ease-in-out infinite";

  document.body.appendChild(mwah);
  setTimeout(() => mwah.remove(), 2500);
}

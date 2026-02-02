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

// 🎵 Autoplay music
window.addEventListener("load", () => {
  music.play().then(() => {
    playPauseBtn.textContent = "⏸️";
  }).catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
      playPauseBtn.textContent = "⏸️";
    }, { once: true });
  });
});

// Play/Pause
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
  finalMessage.classList.remove("hidden");
  bearKiss.classList.remove("hidden");

  // Change text to celebration message
  const question = document.querySelector("h2");
  question.textContent = "yaayayyayayyayayayayaya :3";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  for (let i = 0; i < 50; i++) {
    createHeart(true);
  }

  // Display bears sequentially
  setTimeout(() => {
    bearKiss2.classList.remove("hidden");
  }, 3000); // Show second bear after 3 seconds

});

// 💕 Hearts
function createHeart(isFinal=false) {
  const heart = document.createElement("span");
  heart.innerHTML = isFinal ? "💖" : "💌";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = isFinal ? (Math.random() * 20 + 20) + "px" : "40px";  // Bigger hearts
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);  // Adjusted timing to fit larger hearts
}

setInterval(() => createHeart(false), 300);

// 🌹 Roses
function createRose() {
  const rose = document.createElement("span");
  rose.className = "rose";
  rose.textContent = "🌹";  // Emoji rose
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.fontSize = 36 + Math.random() * 10 + "px";  // Bigger roses
  rose.style.animationDuration = 5 + Math.random() * 4 + "s";
  rosesContainer.appendChild(rose);

  setTimeout(() => rose.remove(), 9000);
}

setInterval(createRose, 450);


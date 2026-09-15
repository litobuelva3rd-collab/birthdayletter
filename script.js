/* =========================
   OPEN LETTER
========================= */

function openLetter() {

  document.getElementById("home").style.display = "none";

  document.getElementById("letterPage").style.display = "flex";

  createManyHearts();

}


/* =========================
   GO BACK
========================= */

function goBack() {

  document.getElementById("letterPage").style.display = "none";

  document.getElementById("home").style.display = "flex";

}


/* =========================
   CREATE HEART
========================= */

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";


  const emojis = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💓",
    "🌸",
    "✨"
  ];


  heart.innerHTML =
    emojis[
      Math.floor(
        Math.random() * emojis.length
      )
    ];


  heart.style.left =
    Math.random() * 100 + "vw";


  heart.style.fontSize =
    Math.random() * 25 + 15 + "px";


  heart.style.animationDuration =
    Math.random() * 3 + 3 + "s";


  document.body.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, 6000);

}


/* =========================
   CREATE MANY HEARTS
========================= */

function createManyHearts() {

  for (let i = 0; i < 40; i++) {

    setTimeout(() => {

      createHeart();

    }, i * 100);

  }

}


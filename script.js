// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".section");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Mobile Nav Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Typing animation
const typedText = ["Frontend Developer", "AI/ML Enthusiast", "Flask & Python Coder"];
let typeIndex = 0, charIndex = 0;
const typeTarget = document.getElementById("typedText");

function typeEffect() {
  if (typeIndex === typedText.length) typeIndex = 0;
  const current = typedText[typeIndex];
  charIndex++;
  typeTarget.innerHTML = current.slice(0, charIndex) + "|";
  if (charIndex === current.length) {
    setTimeout(() => {
      charIndex = 0;
      typeIndex++;
      setTimeout(typeEffect, 100);
    }, 1500);
  } else {
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Skill bar animation
window.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".skill-bar-inner");
  bars.forEach(bar => {
    const barPos = bar.getBoundingClientRect().top;
    if (barPos < window.innerHeight - 50) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// Confetti on form submit
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  confetti();
  alert("Message Sent! 🎉");
  form.reset();
});

function confetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("div");
    conf.classList.add("confetti");
    conf.style.left = Math.random() * 100 + "%";
    conf.style.backgroundColor = getRandomColor();
    conf.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 4000);
  }
}

function getRandomColor() {
  const colors = ["#ffcc00", "#00e676", "#ff4081", "#40c4ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const screens = document.querySelectorAll(".screen");
let current = 0;
let autoTimer = null;

function showSlide(index) {
  screens.forEach(s => s.classList.remove("active"));
  screens[index].classList.add("active");
}

function nextSlide() {
  if (current < screens.length - 1) {
    current++;
    showSlide(current);
  }
}

// YES button
function startValentine() {
  document.getElementById("bgMusic").play();
  current = 1;
  showSlide(current);
}

// GIFT button — ROSE OPENS HERE
function openGift() {
  current = 2; // rose slide
  showSlide(current);

  startAutoSlides(); // THIS IS REQUIRED
}

function startAutoSlides() {
  if (autoTimer) clearInterval(autoTimer);

  autoTimer = setInterval(() => {
    current++;
    if (current < screens.length) {
      showSlide(current);
    } else {
      clearInterval(autoTimer);
    }
  }, 8000); // 
}

// NO BUTTON RUNS
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
  });
}

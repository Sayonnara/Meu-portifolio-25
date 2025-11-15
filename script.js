// Seleciona o checkbox e o body
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Quando o botão é clicado
themeToggle.addEventListener('change', () => {
  // Se estiver marcado, ativa o modo claro
  if (themeToggle.checked) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // salva preferência
  } else {
    // Caso contrário, volta para o modo escuro
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Quando o site carrega, verifica se o usuário já tinha escolhido um tema
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.checked = true;
  } else {
    body.classList.remove('light-theme');
    themeToggle.checked = false;
  }
});


const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1280: { slidesPerView: 5 }, // 💚 5 cards só no desktop
  },
});

// 💡 Pausar autoplay ao passar o mouse
const swiperEl = document.querySelector(".swiper");

swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop(); // pausa o carrossel
});

swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start(); // retoma o autoplay
});

AOS.init({
  duration: 1000, // duração da animação
  once: true, // anima só uma vez
});

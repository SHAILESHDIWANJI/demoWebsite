const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
    document.body.style.backgroundImage = `url(${slides[currentIndex].src})`;
  });
}

function showPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

// Event Listeners
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Initialize
updateSlider();

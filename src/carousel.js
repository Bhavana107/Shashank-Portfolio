document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const items = Array.from(track.querySelectorAll('.carousel-item'));
  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.remove('active', 'prev', 'next', 'hidden');
      
      if (index === currentIndex) {
        item.classList.add('active');
        item.style.transform = 'translate(-50%, -50%) scale(1) translateZ(0)';
        item.style.opacity = '1';
        item.style.zIndex = '5';
      } else if (index === currentIndex - 1 || (currentIndex === 0 && index === items.length - 1)) {
        item.classList.add('prev');
        item.style.transform = 'translate(-110%, -50%) scale(0.8) rotateY(15deg) translateZ(-100px)';
        item.style.opacity = '0.6';
        item.style.zIndex = '4';
      } else if (index === currentIndex + 1 || (currentIndex === items.length - 1 && index === 0)) {
        item.classList.add('next');
        item.style.transform = 'translate(10%, -50%) scale(0.8) rotateY(-15deg) translateZ(-100px)';
        item.style.opacity = '0.6';
        item.style.zIndex = '4';
      } else {
        item.classList.add('hidden');
        item.style.transform = 'translate(-50%, -50%) scale(0.6) translateZ(-200px)';
        item.style.opacity = '0';
        item.style.zIndex = '1';
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Click Navigation
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('prev')) prevSlide();
      if (item.classList.contains('next')) nextSlide();
    });
  });

  // Initial Setup
  updateCarousel();
});

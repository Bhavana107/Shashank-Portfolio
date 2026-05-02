document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.flashcard-container');
  
  containers.forEach(container => {
    let current = 0;
    const cards = container.querySelectorAll('.flashcard');
    const total = cards.length;
    
    // Find counter element
    const infoParent = container.nextElementSibling;
    const counterEl = infoParent ? infoParent.querySelector('.flashcard-counter') : null;
    
    // Set initial counter
    if(counterEl) {
      counterEl.textContent = `1 of ${total}`;
    }

    container.addEventListener('click', () => {
      // Current card moves to prev
      cards[current].classList.remove('active');
      cards[current].classList.add('prev');
      
      // Remove prev from the old prev (so it resets to right side)
      const oldPrev = (current - 1 + total) % total;
      cards[oldPrev].classList.remove('prev');
      
      // Update current index
      current = (current + 1) % total;
      
      // Next card becomes active
      cards[current].classList.remove('prev');
      cards[current].classList.add('active');
      
      // Update counter text
      if(counterEl) {
        counterEl.textContent = `${current + 1} of ${total}`;
      }
    });
  });
});

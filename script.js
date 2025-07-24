// Reveal elements on scroll
window.addEventListener('scroll', reveal);

function reveal() {
  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

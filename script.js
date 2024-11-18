document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });

  const toggleButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show'); // Toggles visibility of the menu
  });
});

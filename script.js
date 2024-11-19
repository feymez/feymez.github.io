document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear()
  $('#currentYear').html('Wszelkie prawa zastrzeżone &copy; 2023 - '+year+' - BlastRP &trade;')
  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });

  document.getElementById('menu-toggle').addEventListener('click', function() {
    const menuItems = document.getElementById('menu-items');
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
  });
});

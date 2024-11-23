document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear()
    $('#currentYear').html(
      'Wszystkie prawa zastrzeżone &copy; '+year+' - BlastRP &trade; <br><br>'
    )
  
    $('#en-US').html(
      'BLASTRP IS NOT APPROVED, SPONSORED OR ENDORSED BY ROCKSTAR GAMES.'
    )
  
    $('#pl-PL').html(
      'BLASTRP NIE JEST ZATWIERDZONY, SPONSOROWANY LUB WSPIERANY PRZEZ ROCKSTAR GAMES.'
    )
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    });
  
    document.getElementById('menu-toggle').addEventListener('click', function() {
      const menuItems = document.getElementById('menu-items');
      menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
    });
  });
  
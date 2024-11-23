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
  
$(document).ready(function () {
  const images = [
      '/photos/biznes.jpg',
      '/photos/comet.png',
      '/photos/doj.jpg',
      '/photos/gang.jpg',
      '/photos/lsc.jpg',
  ];

  images.forEach(image => {
      $('.slider').append(`<img src="${image}" alt="Zdjęcie">`);
  });

  let currentIndex = 0;

  function updateSlider() {
      const width = $('.slider-container').width();
      $('.slider').css('transform', `translateX(${-currentIndex * width}px)`);
  }

  $('.next').click(function () {
      if (currentIndex < images.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateSlider();
  });

  $('.prev').click(function () {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = images.length - 1;
      }
      updateSlider();
  });

  setInterval(function () {
      $('.next').click();
  }, 5000);
});

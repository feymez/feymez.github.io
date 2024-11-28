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

const Question = [1, 2, 3, 4, 5];

function openQuestion(question) {
  
  $('.quest_div').css('display', 'none')
  $('.quest_icon').empty().append('<i class="fa-solid fa-plus"></i>');
  
  for (const k of Question) {
    $(`#${k}_button`).attr('onclick', `openQuestion('${k}')`);
    $(`#${k}_button`).css('border-radius', '8px');
  }
  
  $(`#${question}_icon`).empty().append(`<i class="fa-solid fa-minus"></i>`);
  $(`#${question}_button`).css('border-radius', '8px 8px 0px 0px');
  $(`#${question}_button`).attr('onclick', `closeQuestion('${question}')`);
  $(`#${question}_answer`).css('display', 'block');
}

function closeQuestion(question) {
  $(`#${question}_icon`).empty().append(`<i class="fa-solid fa-plus"></i>`);
  $(`#${question}_button`).attr('onclick', `openQuestion('${question}')`);
  $(`#${question}_button`).css('border-radius', '8px');
  $(`#${question}_answer`).css('display', 'none');
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.copy-button').forEach(button => {
      button.addEventListener('click', () => {
          const codeBlock = button.previousElementSibling;
          const code = codeBlock.textContent;

          navigator.clipboard.writeText(code).then(() => {
              button.textContent = "Skopiowano!";
              button.disabled = true;

              setTimeout(() => {
                  button.innerHTML = `<i class="fa-solid fa-copy"></i>`;
                  button.disabled = false;
              }, 2000);
          }).catch(() => {
              button.textContent = "Błąd";
          });
      });
  });
});

  
// $(document).ready(function () {
//   const images = [
//       '/photos/biznes.jpg',
//       '/photos/comet.png',
//       '/photos/doj.jpg',
//       '/photos/gang.jpg',
//       '/photos/lsc.jpg',
//   ];

//   images.forEach(image => {
//       $('.slider').append(`<img src="${image}" alt="Zdjęcie">`);
//   });

//   let currentIndex = 0;

//   function updateSlider() {
//       const width = $('.slider-container').width();
//       $('.slider').css('transform', `translateX(${-currentIndex * width}px)`);
//   }

//   $('.next').click(function () {
//       if (currentIndex < images.length - 1) {
//           currentIndex++;
//       } else {
//           currentIndex = 0;
//       }
//       updateSlider();
//   });

//   $('.prev').click(function () {
//       if (currentIndex > 0) {
//           currentIndex--;
//       } else {
//           currentIndex = images.length - 1;
//       }
//       updateSlider();
//   });

//   setInterval(function () {
//       $('.next').click();
//   }, 5000);
// });
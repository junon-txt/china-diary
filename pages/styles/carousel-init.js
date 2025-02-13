document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.my-carousel', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('Swiper.js initialized');
  }
);
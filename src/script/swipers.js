const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 0
    },
  },
  // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// ДЛЯ OUR PRODUCT//

const swiper1 = new Swiper('.swiper-our-prod', {
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
      slidesPerView: 2.5,
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
      el: '.swiper-pagination1',
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
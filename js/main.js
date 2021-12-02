const swiper = new Swiper(".swiper", {
  // Пагинация
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "swiper-bullet",
    bulletActiveClass: "swiper-bullet__active",
    clickable: true,
  },
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
new WOW().init();

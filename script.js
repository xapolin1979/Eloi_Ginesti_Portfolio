// efecto scroll

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: false,
  },
});

//enlaces del menu
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);

  if (target) {
    scroll.scrollTo(target);
  }
}

// animacion
/* 
anime({
  targets: '.efectos',
  translateY: 25,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
});
 */

// carrusel habilidades

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    strech: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});



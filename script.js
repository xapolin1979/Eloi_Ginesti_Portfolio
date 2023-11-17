

//enlaces del menu
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);

  if (target) {
    target.scrollIntoView({ alignToTop: true });
  }
}

// animacion

 
 if (window.innerWidth > 950) {
  anime({
    targets: '#seccion1',
    direction:'alternate',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });
} 
  
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



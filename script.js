// Slider testimonios Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

// Enviar formulario demo
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te responderemos pronto 📬");
  e.target.reset();
});

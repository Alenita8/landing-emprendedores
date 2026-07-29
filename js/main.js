const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('activo');
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".oculto").forEach((el) => {
  observador.observe(el);
});

const formulario = document.querySelector('.contact-form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = this.querySelector('input[type="text"]').value;

    alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje.`);

    this.reset();
});
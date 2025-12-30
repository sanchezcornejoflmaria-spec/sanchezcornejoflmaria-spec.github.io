// ================= SCROLL SUAVE =================

document.querySelectorAll('a.nav-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const seccion = document.querySelector(this.getAttribute('href'));
            if (seccion) {
                seccion.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ================= CERRAR NAVBAR EN MÓVIL =================

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// ================= VALIDACIÓN BÁSICA DEL FORMULARIO =================

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        let valido = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valido = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (valido) {
            alert('Mensaje enviado correctamente');
            form.reset();
        } else {
            alert('Por favor completa todos los campos');
        }
    });
}

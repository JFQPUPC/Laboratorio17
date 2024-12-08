document.querySelector('button').addEventListener('click', function () {
    alert('¡Bienvenido a mi sitio web personal!');
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});

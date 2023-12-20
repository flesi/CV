// window.addEventListener('scroll', function() {
//     var header = document.querySelector('header');
//     var nav = document.querySelector('nav');
//     var headerOffset = header.offsetTop + header.offsetHeight;

//     if (window.pageYOffset > headerOffset) {
//         nav.classList.add('fixed-nav');
//     } else {
//         nav.classList.remove('fixed-nav');
//     }
// });

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    var mainContent = document.querySelector('.main-content');
    var headerOffset = header.offsetTop + header.offsetHeight;

    if (window.pageYOffset > headerOffset) {
        nav.classList.add('fixed-nav');
        // Ajustar el ancho y la posición izquierda
        nav.style.width = mainContent.offsetWidth + 'px';
        nav.style.left = mainContent.getBoundingClientRect().left + 'px';
    } else {
        nav.classList.remove('fixed-nav');
        // Restablecer los estilos
        nav.style.width = '';
        nav.style.left = '';
    }
});

// Enlaces de colores al movernos

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            navLinks.forEach(link => {
                link.style.color = '#fff'; // Color por defecto
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.style.color = '#333'; // Color al estar en la sección
                }
            });
        }
    });
});

//*************************************** */

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            navLinks.forEach(link => {
                link.classList.remove('active-section');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active-section');
                }
            });
        }
    });
});


//************************************************ */
// Contacto


// document.getElementById('whatsappForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var company = document.getElementById('company').value;
//     var message = encodeURIComponent("Nombre: " + name + ", Teléfono: " + phone + ", Empresa: " + company + ", Mensaje: " + document.getElementById('message').value);
//     var whatsappUrl = `https://wa.me/617290920?text=${message}`;

//     window.open(whatsappUrl, '_blank');
// });

//********************************************* */
window.onload = function() {
    // Verificar si las cookies ya han sido aceptadas
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsentContainer').style.display = 'block';
    }

    // Evento para el botón de aceptar
    document.getElementById('acceptCookies').onclick = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieConsentContainer').style.display = 'none';

        // Inicializar Google Analytics aquí si es necesario
    }
};

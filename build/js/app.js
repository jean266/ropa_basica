document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp() {
    validarEmail();
}

function validarEmail() {
    const btnEmail = document.querySelector('#icono_flecha');
    const inputEmail = document.querySelector('#email');
    const campoEmail = document.querySelector('.input_email');

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    btnEmail.addEventListener('click', () => {
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta');

        limpiarAlertas();

        if (!emailRegex.test(inputEmail.value)) {
            alerta.textContent = 'Please provide a valid email';
            campoEmail.parentElement.appendChild(alerta);
            inputEmail.parentElement.classList.add('activo');
            inputEmail.parentElement.children[1].classList.remove('ocultar');
        } else {
            if (inputEmail.parentElement.classList.contains('activo')) {
                inputEmail.parentElement.classList.remove('activo');
                inputEmail.parentElement.children[1].classList.add('ocultar');
            }
        }
    });
}


// Evita que haya mas de una alerta
function limpiarAlertas() {
    const alertaPrevia = document.querySelector('.alerta');

    if (alertaPrevia) {
        alertaPrevia.remove();
    }


}
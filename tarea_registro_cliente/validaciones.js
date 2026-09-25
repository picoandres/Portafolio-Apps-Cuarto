const formulario = document.getElementById('formulario');

const input_cedula = document.getElementById('cedula');
const input_nombre = document.getElementById('nombre');
const input_direccion = document.getElementById('direccion');
const input_celular = document.getElementById('celular');
const input_correo = document.getElementById('correo');

const error_cedula = document.getElementById('error_cedula');
const error_nombre = document.getElementById('error_nombre');
const error_direccion = document.getElementById('error_direccion');
const error_celular = document.getElementById('error_celular');
const error_correo = document.getElementById('error_correo');


function validarCedula() {
    const valor = input_cedula.value.trim();

    if (valor === '') {
        error_cedula.textContent = 'La cédula es obligatoria';
        return false;
    }

    if (!/^\d{10}$/.test(valor)) {
        error_cedula.textContent = 'La cédula debe tener exactamente 10 dígitos';
        return false;
    }

    error_cedula.textContent = '';
    return true;
}


function validarNombre() {
    const valor = input_nombre.value.trim();

    if (valor === '') {
        error_nombre.textContent = 'El nombre es obligatorio';
        return false;
    }

    if (valor.length > 50) {
        error_nombre.textContent = 'El nombre no puede tener más de 50 caracteres';
        return false;
    }

    error_nombre.textContent = '';
    return true;
}


function validarDireccion() {
    const valor = input_direccion.value.trim();

    if (valor === '') {
        error_direccion.textContent = 'La dirección es obligatoria';
        return false;
    }

    if (valor.length > 50) {
        error_direccion.textContent = 'La dirección no puede tener más de 50 caracteres';
        return false;
    }

    if (!/[A-Za-zÁÉÍÓÚáéíóúÑñÜü]/.test(valor)) {
    error_direccion.textContent = 'La dirección debe contener al menos una letra';
    return false;
    }

    error_direccion.textContent = '';
    return true;
}


function validarCelular() {
    const valor = input_celular.value.trim();

    if (valor === '') {
        error_celular.textContent = 'El celular es obligatorio';
        return false;
    }

    if (!/^\d{10}$/.test(valor)) {
        error_celular.textContent = 'El celular debe tener exactamente 10 dígitos';
        return false;
    }

    error_celular.textContent = '';
    return true;
}


function validarCorreo() {
    const valor = input_correo.value.trim();
    const correo_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === '') {
        error_correo.textContent = 'El correo es obligatorio';
        return false;
    }

    if (!correo_valido.test(valor)) {
        error_correo.textContent = 'El formato del correo es inválido';
        return false;
    }

    error_correo.textContent = '';
    return true;
}


input_cedula.addEventListener('blur', validarCedula);
input_nombre.addEventListener('blur', validarNombre);
input_direccion.addEventListener('blur', validarDireccion);
input_celular.addEventListener('blur', validarCelular);
input_correo.addEventListener('blur', validarCorreo);

input_cedula.addEventListener('input', function() {
    if (error_cedula.textContent !== '') {
        validarCedula();
    }
});

input_nombre.addEventListener('input', function() {
    this.value = this.value.replace(/[0-9]/g, '');

    if (error_nombre.textContent !== '') {
        validarNombre();
    }
});

input_direccion.addEventListener('input', function() {
    if (error_direccion.textContent !== '') {
        validarDireccion();
    }
});

input_celular.addEventListener('input', function() {
    if (error_celular.textContent !== '') {
        validarCelular();
    }
});

input_correo.addEventListener('input', function() {
    if (error_correo.textContent !== '') {
        validarCorreo();
    }
});


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const cedula_valida = validarCedula();
    const nombre_valido = validarNombre();
    const direccion_valida = validarDireccion();
    const celular_valido = validarCelular();
    const correo_valido = validarCorreo();

    if (
        cedula_valida &&
        nombre_valido &&
        direccion_valida &&
        celular_valido &&
        correo_valido
    ) {
        alert('El cliente ha sido registrado correctamente');
        formulario.submit();
    }
});
const formulario_registro = document.querySelector('#formulario_registro')

// Obtener elementos HTML
const cedula = document.querySelector('#cedula')
const apellidos = document.querySelector('#apellidos')
const nombres = document.querySelector('#nombres')
const direccion = document.querySelector('#direccion')
const telefono = document.querySelector('#telefono')
const correo = document.querySelector('#correo')
const facultad = document.querySelector('#facultad')
const nivel = document.querySelector('#nivel')
const paralelo = document.querySelector('#paralelo')

// Obbtener mensaje de error para cada campo
const error_cedula = document.getElementById('error_cedula');
const error_apellidos = document.getElementById('error_apellidos');
const error_nombres = document.getElementById('error_nombres');
const error_direccion = document.getElementById('error_direccion');
const error_telefono = document.getElementById('error_telefono');
const error_correo = document.getElementById('error_correo');
const error_facultad = document.getElementById('error_facultad');
const error_nivel = document.getElementById('error_nivel');
const error_paralelo = document.getElementById('error_paralelo');

// Validaciones con expresiones regulares
function validarCedula() {
    const valor = cedula.value.trim();

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

function validarApellidos() {
    const valor = apellidos.value.trim();

    if (valor === '') {
        error_apellidos.textContent = 'Los apellidos son obligatorios';
        return false;
    }
    

    error_apellidos.textContent = '';
    return true;
}

function validarNombres() {
    const valor = nombres.value.trim();

    if (valor === '') {
        error_nombres.textContent = 'El nombre es obligatorio';
        return false;
    }
    
    error_nombres.textContent = '';
    return true;
}


function validarDireccion() {
    const valor = direccion.value.trim();

    if (valor === '') {
        error_direccion.textContent = 'La dirección es obligatoria';
        return false;
    }

    if (!/[A-Za-zÁÉÍÓÚáéíóúÑñÜü]/.test(valor)) {
    error_direccion.textContent = 'La dirección debe contener al menos una letra';
    return false;
    }

    error_direccion.textContent = '';
    return true;
}


function validarTelefono() {
    const valor = telefono.value.trim();

    if (valor === '') {
        error_telefono.textContent = 'El número de teléfono es obligatorio';
        return false;
    }

    if (!/^\d{10}$/.test(valor)) {
        error_telefono.textContent = 'El número de teléfono debe tener exactamente 10 dígitos';
        return false;
    }

    error_telefono.textContent = '';
    return true;
}


function validarCorreo() {
    const valor = correo.value.trim();
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

function validarFacultad() {
    if (facultad.value === '') {
        error_facultad.textContent = 'Debe seleccionar una facultad';
        return false;
    }

    error_facultad.textContent = '';
    return true;
}

function validarNivel() {
    if (nivel.value === '') {
        error_nivel.textContent = 'Debe seleccionar un nivel';
        return false;
    }

    error_nivel.textContent = '';
    return true;
}

function validarParalelo() {
    if (paralelo.value === '') {
        error_paralelo.textContent = 'Debe seleccionar un paralelo';
        return false;
    }

    error_paralelo.textContent = '';
    return true;
}

// Mostrar mensaje de error
// si se deselecciona un campo con blur
cedula.addEventListener('blur', validarCedula);
apellidos.addEventListener('blur', validarApellidos);
nombres.addEventListener('blur', validarNombres);
direccion.addEventListener('blur', validarDireccion);
telefono.addEventListener('blur', validarTelefono);
correo.addEventListener('blur', validarCorreo);
facultad.addEventListener('blur', validarFacultad);
nivel.addEventListener('blur', validarNivel);
paralelo.addEventListener('blur', validarParalelo);

// Validaciones en tiempo real
// Se validan los campos en tiempo real cuando se realizan cambios
cedula.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
    // Si se ingresa cualquier caracter no numérico se borra al instante
    if (error_cedula.textContent !== '') {
        validarCedula();
    }
});

apellidos.addEventListener('input', function() {
    this.value = this.value.replace(/[0-9]/g, '');
    // Si se ingresa un número en los apellidos se borra al instante
    if (error_apellidos.textContent !== '') {
        validarApellidos();
    }
});

nombres.addEventListener('input', function() {
    this.value = this.value.replace(/[0-9]/g, '');
    // Si se ingresa un número en los nombres se borra al instante
    if (error_nombres.textContent !== '') {
        validarNombres();
    }
});

direccion.addEventListener('input', function() {
    if (error_direccion.textContent !== '') {
        validarDireccion();
    }
});

telefono.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
    // Si se ingresa cualquier caracter no numérico se borra al instante
    if (error_telefono.textContent !== '') {
        validarTelefono();
    }
});

correo.addEventListener('input', function() {
    if (error_correo.textContent !== '') {
        validarCorreo();
    }
});

facultad.addEventListener('change', function() {
    if (error_facultad.textContent !== '') {
        validarFacultad();
    }
});

nivel.addEventListener('change', function() {
    if (error_nivel.textContent !== '') {
        validarNivel();
    }
});

paralelo.addEventListener('change', function() {
    if (error_paralelo.textContent !== '') {
        validarParalelo();
    }
});

// Registro del estudiante
// Al pulsar el botón de Registrar se guardan los datos del estudiante
// en el almacenamiento local de la página en formato JSON

formulario_registro.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    // Para ejecutar las validaciones
    const cedula_valida = validarCedula();
    const apellidos_validos = validarApellidos();
    const nombres_validos = validarNombres();
    const direccion_valida = validarDireccion();
    const telefono_valido = validarTelefono();
    const correo_valido = validarCorreo();
    const facultad_valida = validarFacultad();
    const nivel_valido = validarNivel();
    const paralelo_valido = validarParalelo();

    if (
        !cedula_valida ||
        !apellidos_validos ||
        !nombres_validos ||
        !direccion_valida ||
        !telefono_valido ||
        !correo_valido ||
        !facultad_valida ||
        !nivel_valido ||
        !paralelo_valido
    ) {
        return;
    }

    // Obtener valores actualizados
      const estudiante = {
        cedula: cedula.value.trim(),
        apellidos: apellidos.value.trim(),
        nombres: nombres.value.trim(),
        direccion: direccion.value.trim(),
        telefono: telefono.value.trim(),
        correo: correo.value.trim(),
        facultad: facultad.value,
        nivel: nivel.value,
        paralelo: paralelo.value
    };

    // Obtener estudiantes almacenados
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];

    // Comprobar si el estudiante ya existe
    const registrado = estudiantes.find(
        estudiante_guardado => estudiante_guardado.cedula === estudiante.cedula
    );

    if (registrado) { // Validar si el estudiante ya está registrado po cédula
        return alert('El estudiante ya está registrado');
    }

    // Guardar estudiante
    estudiantes.push(estudiante);
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    alert('¡Registro Exitoso!');
    window.location.href = 'registro_estudiantes.html';
});
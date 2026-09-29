// Se obtienen las etiquetas de html con su contenido
const formulario = document.getElementById('formulario');
const primer_numero = document.getElementById('primer_numero');
const segundo_numero = document.getElementById('segundo_numero');
const texto_resultado = document.getElementById('texto_resultado');

// Función para organizar el código
function iteraciones() {
    // Transformar el tipo de dato de las etiquetas texto a número
    const num1 = Number(primer_numero.value);
    const num2 = Number(segundo_numero.value);
    let resultado = ""; //Variable donde se guarda el resultado
                        // de cada operación, todo junto
    // Bucle for con cada una de las operaciones
    for (let i = 0; i <=4; i++) {
        if (i === 0) { //Se agrega el resultado a la variable
            resultado += `Suma: ${num1 + num2}\n`;
        }

        if (i === 1) {
            resultado += `Resta: ${num1 - num2}\n`;
        }

        if (i === 2) {
            resultado += `Multiplicación: ${num1 * num2}\n`;
        }

        if (i === 3) {

            if (num2 === 0) {
                resultado += "División: No se puede dividir por 0\n";
            } else {
                resultado += `División: ${num1 / num2}\n`;
              }
        }

        if (i === 4) {
     
            if (num2 === 0) {
                resultado += "Residuo: No se puede calcular (división por 0)\n";
            } else {
                resultado += `Residuo: ${num1 % num2}\n`;
            }
        }
    }
    // Para retornar los resultados
    texto_resultado.textContent = resultado;
    return true;
}
// Reacción a pulsar el botón de =
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const calculos = iteraciones();

    if (calculos) {
        alert('Cálculos finalizados');
    } // Mensaje de confirmación
});
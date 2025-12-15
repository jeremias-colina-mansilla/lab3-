// Obtenemos elementos del DOM
const inputNumero = document.getElementById("numeroBase");
const inputPorcentaje = document.getElementById("porcentaje");
const btnCalcular = document.getElementById("btnCalcular");

const resultadoP = document.getElementById("resultado");
const mensajeP = document.getElementById("mensaje");

// Evento al hacer clic en "Calcular"
btnCalcular.addEventListener("click", () => {

    // Convertimos los valores a número
    const numero = parseFloat(inputNumero.value);
    const porcentaje = parseFloat(inputPorcentaje.value);

    // -------- VALIDACIONES --------

    // Si el número base está vacío o es inválido
    if (isNaN(numero)) {
        mensajeP.textContent = "ERROR: Ingrese un número base válido.";
        mensajeP.className = "error";
        return; // corta la función
    }

    // Si el porcentaje es inválido
    if (isNaN(porcentaje)) {
        mensajeP.textContent = "ERROR: Ingrese un porcentaje válido.";
        mensajeP.className = "error";
        return;
    }

    // Si todo OK, limpiamos mensaje
    mensajeP.textContent = "";
    mensajeP.className = "";

    // -------- CÁLCULO --------
    // (porcentaje de un número = numero * porcentaje / 100)
    const resultado = numero * (porcentaje / 100);

    // Mostramos en pantalla
    resultadoP.textContent = `Resultado: ${resultado.toFixed(2)}`;
    resultadoP.className = "ok";
});

// Variables globales que guardan el estado del temporizador
let tiempoInicial = 0;     // Guarda cuántos segundos pidió el usuario al inicio
let tiempoRestante = 0;    // Cuántos segundos faltan en este momento
let intervalo = null;      // Guarda el setInterval para poder pausarlo o reiniciarlo

// Captura de elementos del HTML
const inputSegundos = document.getElementById("inputSegundos");
const tiempoP = document.getElementById("tiempo");
const historialUl = document.getElementById("historial");

const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");

// Función para agregar registros al historial
function agregarHistorial(texto) {
    const fecha = new Date().toLocaleTimeString(); // Hora actual
    const li = document.createElement("li");       // Creo un <li>
    li.textContent = `[${fecha}] ${texto}`;        // Mensaje con hora
    historialUl.insertBefore(li, historialUl.firstChild); // Lo agrego arriba de todo
}

// Botón INICIAR
btnIniciar.addEventListener("click", () => {
    const valor = parseInt(inputSegundos.value); // Leo los segundos ingresados

    // Validación de que sea un número válido
    if (isNaN(valor) || valor <= 0) {
        alert("Ingrese un número válido.");
        return;
    }

    // Si el temporizador está en 0 o recién configurado, guardamos el tiempo inicial
    if (tiempoRestante === 0 || tiempoRestante === tiempoInicial) {
        tiempoInicial = valor;
        tiempoRestante = valor;
    }

    btnIniciar.disabled = true;  // Bloqueo iniciar mientras corre
    agregarHistorial("Inicio del temporizador");

    // Creamos el intervalo que descuenta de a 1 segundo
    intervalo = setInterval(() => {
        tiempoRestante--;        // Resto un segundo
        actualizarPantalla();    // Muestro el cambio

        // Si el tiempo llegó a cero → parar todo
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            btnIniciar.disabled = false;  // Permitimos iniciar de nuevo
            agregarHistorial("Finalización");
        }
    }, 1000);
});

// Botón PAUSAR
btnPausar.addEventListener("click", () => {
    clearInterval(intervalo);   // Detiene el temporizador sin reiniciarlo
    btnIniciar.disabled = false;
    agregarHistorial("Pausa");
});

// Botón REINICIAR
btnReiniciar.addEventListener("click", () => {
    clearInterval(intervalo);     // Paramos el intervalo
    tiempoRestante = tiempoInicial; // Volvemos al valor original
    actualizarPantalla();         // Actualizamos en pantalla
    btnIniciar.disabled = false;
    agregarHistorial("Reinicio");
});

// Actualiza el valor en pantalla y aplica el color rojo
function actualizarPantalla() {
    tiempoP.textContent = tiempoRestante; // Muestra el tiempo restante

    // Si faltan 5 segundos o menos, se pone rojo
    if (tiempoRestante <= 5) {
        tiempoP.classList.add("rojo");
    } else {
        tiempoP.classList.remove("rojo");
    }
}

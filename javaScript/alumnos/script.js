// Valor inicial del contador
let valor = 0 

// Límites mínimos y máximos permitidos
const min = -20
const max = 20

// Captura de elementos del DOM
const valorId = document.getElementById("valor")           // Donde se muestra el número actual
const tipoNumeroId = document.getElementById("tipoNumero") // Muestra si es positivo, negativo o cero
const historialUl = document.getElementById("historial")   // Lista donde se agregan los movimientos

// Botones
const btnInc = document.getElementById("incrementar")      // Botón de incrementar
const btnDec = document.getElementById("decrementar")      // Botón de decrementar
const btnRei = document.getElementById("reiniciar")        // Botón de reinicio


// Función que actualiza la UI con el valor y su tipo
function actualizarUI(){
    // Actualiza el número en pantalla
    valorId.textContent = valor

    // Determina si es positivo, negativo o cero
    if (valor > 0) tipoNumeroId.textContent = "positivo"
    else if (valor < 0) tipoNumeroId.textContent = "negativo"
    else tipoNumeroId.textContent = "cero"

    // Desactiva botones cuando se alcanza un límite
    btnDec.disabled = valor <= min
    btnInc.disabled = valor >= max
}


// Agrega una entrada al historial
function agregarHistorial(accion){
    // Fecha y hora actual formateada
    const fecha = new Date().toLocaleString()

    // Crear elemento <li>
    const li = document.createElement("li")

    // Texto del historial
    li.textContent = `${fecha} -- ${accion} valor: ${valor}`

    // Agregar el elemento a la lista
    historialUl.appendChild(li)

    // Si querés que lo más reciente aparezca arriba:
    // historialUl.insertBefore(li, historialUl.firstChild)
}



// ----------------------
// Eventos de los botones
// ----------------------

// Botón decrementar
btnDec.addEventListener("click", () => {
    if (valor > min) {           // Verifica que no pase del mínimo
        valor--
        actualizarUI()           // Refresca pantalla
        agregarHistorial("decrementando")
    }
})

// Botón incrementar
btnInc.addEventListener("click", () => {
    if (valor < max) {           // Verifica que no pase del máximo
        valor++
        actualizarUI()
        agregarHistorial("incrementando")
    }
})

// Botón reiniciar
btnRei.addEventListener("click", () => {
    valor = 0                    // Resetea el valor a cero
    actualizarUI()
    agregarHistorial("reinicio")
})


// Llamada inicial para mostrar valores apenas carga la página
actualizarUI()

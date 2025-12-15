const textarea = document.getElementById("texto")
const caracteresSpam = document.getElementById("caracteres")
const palabrasSpam = document.getElementById("palabras")
const lineasSpam = document.getElementById("lineas")
const holaSpam = document.getElementById("hola")




function actualizarEstadisticas() {
    const texto = textarea.value
    //contar cantidad de caracteres con length
    caracteresSpam.textContent = texto.length

    //cantidad de palabras con trim
    let palabras = texto.trim().length === 0
    ? 0:
    texto.trim().split(/\s+/).length
    palabrasSpam.textContent = palabras

    //lineas
    const lineas = texto.length===0? 1 : texto.trim("\n").length
    lineasSpam.textContent = lineas

    //incliye hola?
    holaSpam.textContent = texto.toLowerCase().includes("hola") ? "si" : "no"

}
textarea.addEventListener("input" , actualizarEstadisticas)
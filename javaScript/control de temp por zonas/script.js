
const datos = {
    norte: [],
    sur: []
}


const sectoresSelec = document.getElementById("sectores")
const inputTemp = document.getElementById("temp")
const btnAgregar = document.getElementById("agregar")


btnAgregar.addEventListener("click" , agregar)

function agregar(){
    const sector = sectoresSelec.value
    const valorC = inputTemp.value
    const valor = parseFloat(valorC, 10)


    // validar
    if(isNaN(valor)){
        alert("ingrese un valor valido")
        return
    }

    if(valor <-10 || valor > 50){
        alert("ingrese un valor entre -10 y 50 °")
        return
    }
 

    // guardar 
    if (sector == "zn") datos.norte.push(valor)
        else datos.sur.push(valor)

    inputTemp.value= ""

    actualizarVista()
}

function actualizarVista(){
    actualizarSector(datos.norte, "zonaN", "total-zn", "prom-zn", "estado-zn")
    actualizarSector(datos.sur, "zonaS", "total-zs", "prom-zs", "estado-zs")
}

function actualizarSector(arr, listaId, totalId, promedioId, estadoId) {
    const listaUl = document.getElementById(listaId)
    listaUl.innerHTML = ""

    arr.forEach(c => {
        const li = document.createElement("li")
        li.textContent = c + " °C"
        listaUl.appendChild(li)
    })

    const total = arr.length
    const suma = arr.reduce((s, v) => s + v, 0)
    const promedio = total ? (suma / total).toFixed(2) : 0

    let estado = ""
    if (promedio < 10) estado = "frío"
    else if (promedio <= 25) estado = "templado"
    else estado = "caluroso"

    document.getElementById(totalId).textContent = "Total: " + total
    document.getElementById(promedioId).textContent = "Promedio: " + promedio
    document.getElementById(estadoId).textContent = "Estado térmico: " + estado
}

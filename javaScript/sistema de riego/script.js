const datos ={
    sectorA:  [],
    sectorB: []
}


const btnAgregar = document.getElementById("agregar")
const input = document.getElementById("minutos")
const select = document.getElementById("sector")



btnAgregar.addEventListener("click", agregar)

function agregar(){
    // leer valor
    const sector = select.value
    const valorRaw = input.value
    const tiempo= parseInt(valorRaw, 10)


    // validaciones
    if(isNaN(tiempo)){
        alert("debe ingresar un numero valido")
        return
    }

    if (tiempo < 1 || tiempo > 180 ){
        alert("debe ingresar minutos entre 1 y 180 ")
        return
    }


    // guardamos en el sector correspondiente con
    if (sector == "A") datos.sectorA.push(tiempo)
    else datos.sectorB.push(tiempo)

    // limpiar campo
    input.value= ""
     
    // actualizar vista
    actualizarVista()
}


function actualizarVista(){
    actualizarSector(datos.sectorA, "listaA", "totalA", "promedioA")
    actualizarSector(datos.sectorB, "listaB", "totalB", "promedioB")
}

// limpiar mas llenar mas calcular total y promedio
function actualizarSector(arr, listaId, totalId, promedioId){

    const lista = document.getElementById(listaId)
    lista.innerHTML= ""
    
    arr.forEach(t=>{

        const li = document.createElement("li")
        li.textContent = t +"min"
        lista.appendChild(li)
    })

    const total = arr.reduce((s, v)=> s + v, 0);
    const promedio = arr.length ? (total / arr.length).toFixed(2) : 0;
    
    document.getElementById(totalId).textContent = "total: "+ total
    document.getElementById(promedioId).textContent = "promedio: " + promedio
}

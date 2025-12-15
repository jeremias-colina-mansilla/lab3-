// datos

const datos =[]

const inputTemp = document.getElementById("temp")
const btnAgregar = document.getElementById("agregar")
const listaUl = document.getElementById("listaTemp")

const totalP = document.getElementById("total")
const promedioP = document.getElementById("prom")
const nivelP = document.getElementById("nivel")


btnAgregar.addEventListener("click", agregar)

function agregar() {
    const valorC = inputTemp.value;
    const valor = parseFloat(valorC)


    // validar
    if(isNaN(valor)){
        alert("ingrese un valor valido")
        return
    }
    if(valor <0 || valor > 100){
        alert("debe ingresar un valor entre 0 y 100")
        return
    }
    
    // guardar
    datos.push(valor)
    inputTemp.value =""
    actualizarLista()
    
}

function actualizarLista(){
    listaUl.innerHTML=""

    // mostrar temperatura
    datos.forEach(t =>{
        const li = document.createElement("li")
        li.textContent= t + " °c"
        listaUl.appendChild(li)
    })
    

    // calcular total 
    const total = datos.length

    // calcular promedio
    const suma = datos.reduce((acc, v) => acc + v, 0)
    const prom = (suma / total).toFixed(2)


    // nivel termico 
    let nivel =  ""
    if(prom < 15) nivel= "frio"
    else if (prom <=25) nivel = "Agradable"
    else nivel = "caluroso"

    // mostrar el resultado

    totalP.textContent= "total: "+ total
    promedioP.textContent= "promedio: " + prom
    nivelP.textContent = "nivel: " + nivel
}
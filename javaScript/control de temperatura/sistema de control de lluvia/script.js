
const datos = []


const inputLLuvia = document.getElementById("lluvia")
const btnAgregar = document.getElementById("agregar")

const listaUl = document.getElementById("lista-lluvia")
const totalP = document.getElementById("total")
const promedioP = document.getElementById("prom")
const nivelP = document.getElementById("nivel")


btnAgregar.addEventListener("click", agregar)

function agregar(){
    const valorC = inputLLuvia.value
    const valor = parseFloat(valorC)


    // validar
    if(isNaN(valor)){
        alert("ingrese un valor valido")
        return
    }
    if(valor <0 || valor > 60){
        alert("ingrese un valor entre 0 y 60")
        return
    }


    // guardar 
    datos.push(valor)

    // limpiar el campo input
    inputLLuvia.value = ""

    // actualizar pantalla 
    actualizar()
}

function actualizar(){
    listaUl.innerHTML=  ""

    // mostrar lluvia
    datos.forEach(l =>{
        const li = document.createElement("li")
        li.textContent = l + "mm"
        listaUl.appendChild(li)
    })


 // calcular total
const total = datos.length;

// calcular promedio
const suma = datos.reduce((acc, v) => acc + v, 0);
const prom = suma / total;  // No aplicamos toFixed aquí

// determinar nivel
let nivel = "";
if (prom < 10) nivel = "seco";
else if (prom <= 30) nivel = "normal";
else nivel = "lluvioso";

// mostrar el resultado
totalP.textContent = "Total: " + total;
promedioP.textContent = "Promedio: " + prom.toFixed(2); // Aplicamos toFixed solo al mostrar
nivelP.textContent = "Nivel: " + nivel;
    
    
}
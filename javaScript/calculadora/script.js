const IVA = 0.21;

const precioBaseImput = document.getElementById("precioBase")
const descuentoInput = document.getElementById("descuento")
const btnCalcular = document.getElementById("calcular")

const precioConDescP = document.getElementById("precioDesc")
const precioFinalP = document.getElementById("precioFinal")


//Evento cuando se aprieta calcular 
btnCalcular.addEventListener("click", ()=>{
    
    //1 Obtener valores imput 
    const precioBase = parseFloat(precioBaseImput.value)
    const descuento = parseFloat(descuentoInput.value) || 0 ;

    //validaciones 
    if (isNaN(precioBase) || precioBase <= 0 ){
        alert("El precio base no puede estar vacio o ser negativo")
        return; //detiene la funcion
    }

    //3 calculo del descuento 
    const precioConDescuento = precioBase - (precioBase * descuento/100)

    //4 Agregar IVA 
    const precioFinal = precioConDescuento * (1 + IVA)

    //5 Mostrar en pantalla

    precioConDescP.textContent = `precio con descuento: $${precioConDescuento.toFixed(2)}`
    precioFinalP.textContent = `precio final con IVA: $${precioFinal.toFixed(2)}`
})


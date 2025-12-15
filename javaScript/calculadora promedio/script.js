const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const botonCalcular = document.getElementById("calcularPromedio");

const promedioP = document.getElementById("promedio");
const estadoP = document.getElementById("estadoAlumno");

botonCalcular.addEventListener("click", function() {
    
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);

    // Validaciones
    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Debes ingresar ambas notas");
        return;
    }

    if (nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10) {
        alert("Las notas deben estar entre 0 y 10");
        return;
    }

    // Calculo del promedio
    const promedio = (nota1 + nota2) / 2;

    // Mostrar promedio
    promedioP.textContent = "Promedio: " + promedio.toFixed(2);

    // Determinar si aprueba
    if (promedio >= 7) {
        estadoP.textContent = "Estado: Aprobado";
    } else {
        estadoP.textContent = "Estado: Desaprobado";
    }
});

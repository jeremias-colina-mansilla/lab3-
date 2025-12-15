let temperatura = 20;

const tempActual = document.getElementById("tempActual");
const estadoTemp = document.getElementById("estadoTemp");

const btnDown = document.getElementById("btnDown");
const btnUp = document.getElementById("btnUp");
const btnReset = document.getElementById("btnReset");

const historialUl = document.getElementById("historial");

function actualizarUI() {
    tempActual.textContent = temperatura;

    if (temperatura <= 15) {
        estadoTemp.textContent = "Temperatura Baja";
    } else if (temperatura >= 25) {
        estadoTemp.textContent = "Temperatura Alta";
    } else {
        estadoTemp.textContent = "Temperatura Normal";
    }

    btnDown.disabled = temperatura <= 10;
    btnUp.disabled = temperatura >= 30;
}

function registrarAccion(accion) {
    const fecha = new Date().toLocaleString();
    const li = document.createElement("li");
    li.textContent = `${fecha} - ${accion} → ${temperatura}°C`;

    historialUl.prepend(li);
}

btnUp.addEventListener("click", () => {
    temperatura++;
    actualizarUI();
    registrarAccion("Subió temperatura");
});

btnDown.addEventListener("click", () => {
    temperatura--;
    actualizarUI();
    registrarAccion("Bajó temperatura");
});

btnReset.addEventListener("click", () => {
    temperatura = 20;
    actualizarUI();
    registrarAccion("Reseteó temperatura");
});

actualizarUI();

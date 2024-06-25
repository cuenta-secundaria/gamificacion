let nivel = 0;
let puntosAcumulados = 0;
let puntosRestantes = 100;

function actualizarPantalla() {
    document.getElementById("nivel").innerText = `Nivel: ${nivel}`;
    document.getElementById("puntos-acumulados").innerText = `Puntos acumulados: ${puntosAcumulados}`;
    document.getElementById("puntos-restantes").innerText = `Puntos restantes para el siguiente nivel: ${puntosRestantes}`;
}

function sumarPuntos() {
    let puntosInput = document.getElementById("puntos").value.trim();
    if (puntosInput === "") {
        alert("Por favor, introduce un número válido de puntos.");
        return;
    }

    let puntos = parseInt(puntosInput);
    if (isNaN(puntos) || puntos <= 0) {
        alert("Por favor, introduce un número válido de puntos.");
        return;
    }

    puntosAcumulados += puntos;
    while (puntosAcumulados >= 100) {
        puntosAcumulados -= 100;
        nivel++;
    }
    puntosRestantes = 100 - puntosAcumulados;

    actualizarPantalla();
    document.getElementById("puntos").value = '';
}

function resetearPuntuacion() {
    nivel = 0;
    puntosAcumulados = 0;
    puntosRestantes = 100;
    actualizarPantalla();
}

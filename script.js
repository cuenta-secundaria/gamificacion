// Variables globales para nivel, puntos acumulados y puntos restantes
let nivel;
let puntosAcumulados;
let puntosRestantes = 100;

// Función para inicializar o restaurar los valores desde localStorage
function inicializarValores() {
    nivel = parseInt(localStorage.getItem('nivel')) || 0;
    puntosAcumulados = parseInt(localStorage.getItem('puntosAcumulados')) || 0;
}

// Función para actualizar la pantalla con los valores actuales
function actualizarPantalla() {
    document.getElementById("nivel").innerText = `Nivel: ${nivel}`;
    document.getElementById("puntos-acumulados").innerText = `Puntos acumulados: ${puntosAcumulados}`;
    document.getElementById("puntos-restantes").innerText = `Puntos restantes para el siguiente nivel: ${puntosRestantes}`;
}

// Función para sumar puntos
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

    // Guardar en localStorage después de cada actualización
    localStorage.setItem('nivel', nivel);
    localStorage.setItem('puntosAcumulados', puntosAcumulados);
}

// Función para resetear la puntuación
function resetearPuntuacion() {
    nivel = 0;
    puntosAcumulados = 0;
    puntosRestantes = 100;
    actualizarPantalla();

    // Limpiar localStorage al resetear la puntuación
    localStorage.removeItem('nivel');
    localStorage.removeItem('puntosAcumulados');
}

// Función que se ejecuta al cargar la página
window.onload = function() {
    // Inicializar o restaurar los valores desde localStorage
    inicializarValores();
    // Actualizar la pantalla con los valores iniciales
    actualizarPantalla();
};

// script.js

// Obtener puntos y nivel almacenados en localStorage
let puntos = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;
let nivel = localStorage.getItem('nivel') ? parseInt(localStorage.getItem('nivel')) : 0;
const puntosPorNivel = 100;

// Actualizar la visualización inicial
actualizarVisualizacion();

// Función para sumar puntos
function sumarPuntos(cantidad) {
    puntos += cantidad;
    verificarNivel();
    actualizarVisualizacion();
    guardarDatos();
}

// Función para verificar y actualizar el nivel
function verificarNivel() {
    if (puntos >= (nivel + 1) * puntosPorNivel) {
        nivel++;
    }
}

// Función para actualizar la visualización
function actualizarVisualizacion() {
    document.getElementById('nivel').innerText = `Nivel: ${nivel}`;
    document.getElementById('puntos').innerText = `Puntos: ${puntos}`;
    document.getElementById('restantes').innerText = `Puntos para el siguiente nivel: ${(nivel + 1) * puntosPorNivel - puntos}`;
}

// Función para guardar los datos en localStorage
function guardarDatos() {
    localStorage.setItem('puntos', puntos);
    localStorage.setItem('nivel', nivel);
}

// Ejemplo de cómo sumar puntos
document.getElementById('sumarPuntosBtn').addEventListener('click', () => {
    sumarPuntos(10); // Cambia el 10 por la cantidad de puntos que desees sumar
});

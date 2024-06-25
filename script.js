// script.js

// Obtener puntos y nivel almacenados en localStorage
let puntos = localStorage.getItem('puntos') ? parseInt(localStorage.getItem('puntos')) : 0;
let nivel = localStorage.getItem('nivel') ? parseInt(localStorage.getItem('nivel')) : 0;
const puntosPorNivel = 100;

// Actualizar la visualización inicial
actualizarVisualizacion();

// Función para sumar puntos
function sumarPuntos(cantidad) {
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido de puntos.");
        return;
    }
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

// Función para reiniciar puntos y nivel
function clearDatos() {
    puntos = 0;
    nivel = 0;
    guardarDatos();
    actualizarVisualizacion();
}

// Manejar el evento del botón para sumar puntos
document.getElementById('sumarPuntosBtn').addEventListener('click', () => {
    const puntosInput = document.getElementById('puntosInput');
    const cantidad = parseInt(puntosInput.value);
    sumarPuntos(cantidad);
    puntosInput.value = ''; // Limpiar la entrada después de sumar los puntos
});

// Manejar el evento del botón "Clear"
document.getElementById('clearBtn').addEventListener('click', clearDatos);

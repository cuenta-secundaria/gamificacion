// Variables para llevar el seguimiento de los puntos y el nivel
let puntos = parseInt(localStorage.getItem('puntos')) || 0;
let nivel = parseInt(localStorage.getItem('nivel')) || 0;
const puntosPorNivel = 100;

// Función para actualizar la interfaz con los valores actuales
function actualizarInterfaz() {
    document.getElementById('nivel').textContent = nivel;
    document.getElementById('puntos').textContent = puntos;
    document.getElementById('puntos-siguiente').textContent = puntosPorNivel - (puntos % puntosPorNivel);
}

// Función para sumar puntos
function sumarPuntos(cantidad) {
    puntos += cantidad;
    // Verificar si se alcanzó el siguiente nivel
    if (puntos >= puntosPorNivel) {
        nivel++;
        puntos -= puntosPorNivel;
    }
    // Actualizar la interfaz
    actualizarInterfaz();
    // Guardar los puntos y el nivel en el localStorage
    localStorage.setItem('puntos', puntos);
    localStorage.setItem('nivel', nivel);
}

// Función para reiniciar (clear)
function clearPuntos() {
    puntos = 0;
    nivel = 0;
    // Actualizar la interfaz
    actualizarInterfaz();
    // Limpiar el localStorage
    localStorage.removeItem('puntos');
    localStorage.removeItem('nivel');
}

// Al cargar la página, actualizar la interfaz con los valores almacenados
window.onload = function() {
    actualizarInterfaz();
};

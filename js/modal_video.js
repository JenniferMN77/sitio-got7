function openModal(videoSrc) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    
    video.src = videoSrc;
    modal.style.display = "flex";
    modal.classList.add("show");
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    
    video.pause(); // Pausar el video al cerrar la ventana modal
    video.src = ""; // Vaciar la fuente para evitar que siga reproduciendo en segundo plano
    modal.classList.remove("show");
    modal.style.display = "none";
}

// Cerrar la modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Asegurar que la modal no quede abierta al recargar la página
document.addEventListener("DOMContentLoaded", function () {
    closeModal();
});

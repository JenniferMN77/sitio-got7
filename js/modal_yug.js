function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Establecer la fuente del iframe a la URL del video
    modalVideo.src = videoUrl;
    
    // Mostrar el modal
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Detener el video al cerrar el modal
    modalVideo.src = "";
    
    // Ocultar el modal
    modal.style.display = "none";
}
function openModal(videoId) {
    const modal = document.getElementById("videoModal");
    const videos = document.querySelectorAll(".modal-video");

    // Mostrar modal
    modal.style.display = "flex";

    // Mostrar solo el video seleccionado
    videos.forEach(video => {
        if (video.id === videoId) {
            video.style.display = "block";
            video.play();
        } else {
            video.style.display = "none";
            video.pause();
        }
    });
}

function closeModal() {
    const modal = document.getElementById("videoModal");
    const videos = document.querySelectorAll(".modal-video");

    // Ocultar modal
    modal.style.display = "none";

    // Pausar todos los videos
    videos.forEach(video => {
        video.pause();
    });
}

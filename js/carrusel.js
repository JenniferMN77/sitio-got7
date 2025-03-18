let index = 0;
const slides = document.querySelector(".carousel-images");
const dots = document.querySelectorAll(".dot");
function updateCarousel() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}
function moveSlide(n) {
    index = (index + n + dots.length) % dots.length;
    updateCarousel();
}
function currentSlide(n) {
    index = n;
    updateCarousel();
}
updateCarousel();
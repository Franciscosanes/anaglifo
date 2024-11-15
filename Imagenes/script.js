let carousels = {};

function initializeCarousel(carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .slide`);
    carousels[carouselId] = {
        currentSlide: 0,
        slides: slides,
        totalSlides: slides.length
    };

    showSlide(0, carouselId);
}

function showSlide(index, carouselId) {
    const carousel = carousels[carouselId];
    if (!carousel) return;

    if (index >= carousel.totalSlides) {
        carousel.currentSlide = 0;
    } else if (index < 0) {
        carousel.currentSlide = carousel.totalSlides - 1;
    } else {
        carousel.currentSlide = index;
    }

    carousel.slides.forEach((slide, i) => {
        slide.style.display = i === carousel.currentSlide ? 'block' : 'none';
    });
}

function moveSlide(step, carouselId) {
    const carousel = carousels[carouselId];
    if (!carousel) return;
    showSlide(carousel.currentSlide + step, carouselId);
}

window.onload = () => {
    initializeCarousel('carousel1');
    initializeCarousel('carousel2');
    initializeCarousel('carousel3');
};

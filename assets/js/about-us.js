document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true,
        speed: 600,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

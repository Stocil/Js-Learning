new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    speed: 1000,
});

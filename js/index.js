const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // direction: 'vertical',
    loop: true,
    autoplay: true,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

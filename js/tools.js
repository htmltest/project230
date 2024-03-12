$(document).ready(function() {

    $('.partners-section').each(function() {
        var curSection = $(this);
        var curSlider = curSection.find('.partners-list');
        var swiper = new Swiper(curSlider[0], {
            touchAngle: 30,
            slidesPerView: 1,
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                1220: {
                    slidesPerView: 4
                },
                1580: {
                    slidesPerView: 5
                }
            },
            navigation: {
                nextEl: curSection.find('.partners-section-next')[0],
                prevEl: curSection.find('.partners-section-prev')[0],
            },
        });
    });

});
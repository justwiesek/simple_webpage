    var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 3,
            }
        }
    
    });


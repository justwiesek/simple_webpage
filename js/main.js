'use strict';

//smooth scroll

$('a[href*="#"]').click(function() {
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 50
    }, 1000);
});

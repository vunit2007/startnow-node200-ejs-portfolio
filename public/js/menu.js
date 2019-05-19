
 // Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 250) {
        $('.main-nav').addClass('sticky');
    } else {
        $('.main-nav').removeClass('sticky open-nav');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main-nav').hasClass('open-nav')) {
        $('.main-nav').removeClass('open-nav');
    } else {
        $('.main-nav').addClass('open-nav');
    }
});

$('.main-nav li a').click(function() {
    if ($('main-nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('main-nav').removeClass('open-nav');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});




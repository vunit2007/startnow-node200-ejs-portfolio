//Main Hero Scroll Down
$('.down').click(function(event) {
    var offset = 70;
    var target = $('#about').offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

//Logo Nav Scroll Up
$('.logo').click(function(event) {
    var offset = 70;
    var target = $('#hero').offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


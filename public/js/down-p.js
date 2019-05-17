//Portfolio Hero Scroll Down
$('.down-p').click(function(event) {
    var offset = 70;
    var target = $('#portfolio').offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

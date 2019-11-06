$(function() {
    // abre e fecha menu
    $('.nav-toggle, .nav-close').click(function(e) {
        e.preventDefault();
        //se estiver ativa tira se nao ativa
        $('.nav').toggleClass('active');
    });

    //fixar header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
});
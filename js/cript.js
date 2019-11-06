$(function() {
    // abre e fecha menu
    $('.nav-toggle, .nav-close').click(function(e) {
        e.preventDefault();
        //se estiver ativa tira se nao ativa
        $('.nav').toggleClass('active');
    });
});
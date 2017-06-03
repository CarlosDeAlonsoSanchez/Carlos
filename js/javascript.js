$(document).ready(function() {
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });



//    $('.iconoSeccion').mouseover(function(){
//        $(this).children('a').children($(".imgIcono")).toggle();
//        $(this).children('a').children($(".tituloSeccion")).toggle();
//
//    });
//
//    $('.iconoSeccion').mouseout(function(){
//        $(this).children('a').children($(".imgIcono")).toggle();
//        $(this).children('a').children($(".tituloSeccion")).toggle();
//
//    });


});
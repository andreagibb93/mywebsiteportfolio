// typing text //
$(function() {
    var typed = new Typed('#typing_text', {
        strings: ["Hello, ^1000 I focus on responsive immersive web design"],
        typeSpeed: 50,
        startDelay: 2000,
        backSpeed: 20,
    });
});



$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
     return false;
   });
 });

 $( document ).ready(function() {

    // Function to change the nav-bar on scroll
    $(window).scroll(function(){
        ($(window).scrollTop() >= 400) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });

    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });

});

// progression skill barras

$('.barra-nivel').each(function() {
  var valorLargura = $(this).data('nivel');
  var valorNivel = $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");
    $(this).animate({
        width: valorLargura
    });
});

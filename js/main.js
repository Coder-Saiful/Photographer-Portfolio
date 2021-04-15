$(document).ready(function () {

    // main menu js

    $(".menu_toggle").click(function () {
        $(".menu_toggle span").toggleClass("active");
        $(".main_menu").toggleClass("active");
    });

    $(".main_menu ul li a").click(function () {
        $(".menu_toggle span").toggleClass("active");
        $(".main_menu").toggleClass("active");
    });

    // testimonial slider js

    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700
    });

    // sticky top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".sticky_top").addClass("menu_bg");
        } else {
            $(".sticky_top").removeClass("menu_bg");
        }
    });

    // Smooths scrolling
    $('body').scrollspy({
        target: ".sticky_top",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('#header_part a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    // scroll top js
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".scroll_to_top").fadeIn();
        } else{
            $(".scroll_to_top").fadeOut();
        }
    });
    
    $(".scroll_to_top").click(function(){
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    });
    
    // preloader  js
    
    $(window).on("load", function(){
        $(".preloader").delay(3000).fadeOut(500);
    });



});

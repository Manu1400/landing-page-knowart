/*
------------------------------------------------------------------------
* Template Name    : Brezon | Responsive Bootstrap 4 Landing Template *
* Author           : ThemesBoss                                       *
* Version          : 1.0.0                                            *
* Created          : July 2018                                        *
* File Description : Main Js file of the template                     *
*-----------------------------------------------------------------------
*/


(function ($) {

    'use strict';

    // SmoothLink
    function initSmoothLink() {
        $('.nav-item a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    // StickyMenu
    function initStickyMenu() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    }

    // Scrollspy
    function initScrollspy() {
        $("#navbarCollapse").scrollspy({
            offset: 270
        });
    }

    //MFPVideo
    function initMFPVideo() {
        $('.video_play').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // Back To Top
    /*
    function initBackToTop() {
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.back_top').fadeIn();
            } else {
                $('.back_top').fadeOut();
            }
        });
        $('.back_top').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    }
    */

    function init() {
      //console.log('initTyped')
      //var typed = new Typed('#typed', {
      //  stringsElement: '#typed-strings'
      //});

        initSmoothLink();
        initStickyMenu();
        initScrollspy();
        initMFPVideo();
        //initBackToTop();
    }

    init();

})(jQuery); //console.error("end")

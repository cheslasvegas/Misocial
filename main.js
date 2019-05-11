"use strict";
$(function () {
    let scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    let smoothScroll = element =>
        document.querySelector(element).scrollIntoView({
            behavior: 'smooth'
        });
    let toggleOverflow = (state) => {
        let body = $("body");
        body.css("overflow", state);
    };

    let link = $('.m-menu-link');
    let close = $('.close-menu');
    let menu = $('.m-menu');
    link.on('click', function (event) {
        event.preventDefault();
        toggleOverflow("hidden");
        menu.toggleClass('active');

    });
    close.on('click', function (event) {
        event.preventDefault();
        toggleOverflow("auto");
        menu.toggleClass('active');

    });

    $('.m-menu .menu-link').click(function () {
        event.preventDefault();
        menu.toggleClass('active');
        let target = $(this).attr('href');
        smoothScroll(target);
        toggleOverflow('auto');
    });
    $('.header .menu li').hover(function () {
        $(this).addClass('animated');
    }, function () {
        $(this).removeClass('animated');
    });
    $('.menu-link').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        smoothScroll(target);
    });
    $('.arrow-down').click(function (e) {
        e.preventDefault();
        smoothScroll('#pricing')
    });
    $('.footer .footer-menu-link:first-child').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        smoothScroll(target);
    })
});
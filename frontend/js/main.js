/*
(function () {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})()
*/
/*Animation*/
AOS.init({
    duration: 1200,
})


/*
var myNode = document.querySelector('#mobile-menu');
myNode.addEventListener("click", function (e) {
    //alert(e.target+" clicked");

    let closeCanvas = document.querySelector('[data-bs-dismiss="offcanvas"]');
    closeCanvas.click();
});
*/

/*Timeline Js*/

$(window).on('scroll', function () {
    $('.cd-timeline-block').each(function () {
        if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
    });
});

/*
$(window).on('load', function () {
    $('#loading').hide();
})
*/


/* Rakib JS */
$('.search-btn').on('click', function (e) {
    console.log('test')
    e.preventDefault();
    $('#search-modal-dialog').css('display', 'block');
});

$('.search-close').on('click', function(e){
    e.preventDefault();
    $('#search-modal-dialog').css('display', 'none');
});


// On click add active class to current link
$('.nav-item').on('click', function (e) {

    if ($(this).hasClass('cart-item') || $(this).hasClass('search-item')) {
        return;
    }else{
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    }

});

// on hover add active class to current link
$('.nav-item').on('mouseenter', function (e) {

    // if nav-item has class cart-item and search-item do not add active class else class active
    if ($(this).hasClass('cart-item') || $(this).hasClass('search-item')) {
        $(this).removeClass('hover-style');
    }
    else {
        $('.nav-item').removeClass('hover-style');
        $(this).addClass('hover-style');
        $('.navbar').addClass('navbar-hover');
    }


});
$('.nav-item').on('mouseleave', function(e){

    $('.navbar').removeClass('navbar-hover');
    $(this).removeClass('hover-style');
})



// on scroll down add class to navbar and on scroll up remove class
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('.navbar').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top');
    }
});




// on click add active class to current link
$('#nav-open').on('click', function (e) {
    e.preventDefault();
    $('.mobile-nav-content').toggleClass('show');
    $('#nav-icon').toggleClass('open');

});



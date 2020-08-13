$(document).ready(function(){

    $('.preloader').fadeOut(2000);

    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000
    })

    $('.image-popup').magnificPopup({
        type: 'image',
        removedDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    })
})

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll("navbar-nav li");
  //toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

    // animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
        link.style.animation = ''
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
           });
        //burger animation
        burger.classList.toggle('toggle');   
    });
}

navSlide();
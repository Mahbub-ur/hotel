
$(window).on("load", function(){
    $("#loader").fadeOut(1000);
})

AOS.init();

// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});



// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
  });
  $(document).ready(function(){
    $(".our-partner").owlCarousel({
        items:5,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            600:{
                items:4,
            },
            1000:{
                items:5,
            }
        }
    });
  });

// counter design
$(".number").counterUp({time:2000});


// Our Partner


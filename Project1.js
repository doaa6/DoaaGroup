
var i = 0;
var slidesimg = ["images/63.jpg", "images/64.jpg", "images/65.jpg", "images/66.jpg"]
function slideshow() {
    "use strict";
    document.slideshow.src = slidesimg[i];
    if (i < slidesimg.length - 1) {
        i = i + 1;
    } else {
        i = 0;
    }
    setTimeout("slideshow()", 3000);
}
slideshow();
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


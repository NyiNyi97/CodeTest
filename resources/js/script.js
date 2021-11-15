$(document).ready(function(){
    $('#product-carousel').owlCarousel({
        loop:true,
        dots: false,
        nav:true,
        margin:10,
        navText: ['<i class="fa fa-angle-left"></i>' ,'<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
})
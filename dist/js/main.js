
//Card Carousel slider
$(".slider").owlCarousel({
    margin:10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000, 
    autoplayHoverpause:true,

    responsive:{
        0:{
            items:1,
            nav:false,    

        },

        600:{
            items:3,
            nav:false,
        },

        1000:{
            items:4,
            nav:false,
        },
    }

});


//sidebar nav 
var menu = document.querySelector(".main-menu");
var menuBtn = document.querySelector(".menu-bar");
var cancelBtn = document.querySelector(".menu-close");

menuBtn.addEventListener("click", function(e){
    menu.classList.add("active");
    
})

cancelBtn.addEventListener("click", function(e){
    menu.classList.remove("active")
})


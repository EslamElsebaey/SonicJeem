
$(window).load(function(){
  $(".preloader").fadeOut();
})




$(document).ready(function(){

  // main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

// news swiper
const newsSwiper = new Swiper('.news .swiper', {
  loop: true,
  draggable: true,
  // autoplay: true,
  pagination: {
    el: '.news .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news .swiper-button-next ',
    prevEl: '.news .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween : 20 
    },
    768: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
    992: {
      slidesPerView: 3,
      spaceBetween : 28 ,
    },
   
  }
});

//  new arrivals swiper

const newArrivalSwiper = new Swiper(' .newArrivals .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.newArrivals .swiper-button-next ',
    prevEl: '.newArrivals .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//   bestseller Swiper swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//   offersSwiper Swiper 

const offersSwiper = new Swiper(' .offers .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.offers .swiper-button-next ',
    prevEl: '.offers .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//   couponsSwiper Swiper 

const couponsSwiper = new Swiper(' .coupons .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.coupons .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.coupons .swiper-button-next ',
    prevEl: '.coupons .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//  clientsReview swiper

const  clientsReview = new Swiper(' .clients-reviews  .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    } 
  }
});





// **************************************************************************************************


// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("overflow-hiddden") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("overflow-hiddden") ;
})



// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


// **************************************************************************************************


//fixed nav

    //~~~~~~~~~ fixed header in mobile
  
    $(window).on("scroll", function () {
      if($(document).scrollTop() == 0){
        $(".search").css("display" , "block")
      }else{
        $(".search").css("display" , "none")
      }
      if ($(window).scrollTop() > 150) {
          $("header").addClass("fixed");
          if($(window).width() < 992){
            $(".open-search-btn").addClass("display-block") ;
          } 
          $(".open-search-btn i").removeClass("la-times") ;
          if($(window).width() > 992){
          $(".li-drop > a").addClass("line-height-38");
          } 
          
      } else {
          $("header").removeClass("fixed");
          $(".search").removeClass("display-none");
          $(".open-search-btn").removeClass("display-block") ;
          if($(window).width() > 992){
            $(".li-drop > a").removeClass("line-height-38");
          }
         
      }
    });
    var fixedBar = document.querySelector("header"),
    prevScrollposition = $(window).scrollTop();
      
    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  


// **************************************************************************************************

// open search 


$(".open-search-btn").click(function(){
$(".search").slideToggle(300);
$(this).children().toggleClass("la-times");
})





// **************************************************************************************************

// nested menus

if($(window).width() <= 992) {  
  $(".li-drop").click(function (e) {
    e.preventDefault() ;
    $(this).children().children().children(".mega-items-parent").slideToggle(300) ;
    $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
    $(".li-drop").not($(this)).children(".nav-ancor").removeClass("nav-arrow-rotate");
    $(".li-drop").not($(this)).children().children().children(".mega-items-parent").slideUp(300);
    })
    $(".li-drop .nav-ancor").removeAttr("href");
    $(".currency").click(function(){
      $(".lang-currency-closebtn-holder .currency .currency-details").slideToggle(300);
    })
  }
   


  /********************************************************************************* */

//  nested menus in footer


if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }




/********************************************************************************* */


})








(function ($) {
    "use strict";

    var windowOn = $(window);

  // wow animation

    windowOn.on('load', function () {
      wowAnimation();
      });
      
// preeloader

      windowOn.on('load', function() {
        $("#loading").fadeOut(500);
      })


  // back-to-top

var btn = $('#back-to-top');

windowOn.scroll(function() {
  if (windowOn.scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function() {
  $('html, body').animate({scrollTop:0}, '300');
});




  // sticky js 
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $("#tp-header-sticky").removeClass("header-sticky");
    } else {
      $("#tp-header-sticky").addClass("header-sticky");
    }
  });

      // mobile menu 
      var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
      var tpSideMenu = $('.tp-offcanvas-menu nav');
      tpSideMenu.append(tpMenuWrap);
      if ($(tpSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
        $(tpSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
      }
  
      var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
      $(sideMenuList).on('click', function (e) {
        console.log(e);
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
          $(this).parent().addClass('active');
          $(this).siblings('.sub-menu, .tp-mega-menu').slideDown();
        } else {
          $(this).siblings('.sub-menu, .tp-mega-menu').slideUp();
          $(this).parent().removeClass('active');
        }
      });
  
  // off canvas bar
    $(".am-offcanvas-toggle").on('click', function(){
      $(".am-offcanvas").addClass("am-offcanvas-open");
      $(".am-offcanvas-overlay").addClass("am-offcanvas-overlay-open");
    });


    $(".am-offcanvas-close-toggle, .am-offcanvas-overlay").on('click', function(){
      $(".am-offcanvas").removeClass("am-offcanvas-open");
      $(".am-offcanvas-overlay").removeClass("am-offcanvas-overlay-open");
    });
// off canvas



// search bar

$(".tp-search-toggle").on('click', function(){
  $(".tp-header-search-bar").addClass("tp-search-open");
  $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
});

$(".tp-search-close,.tp-offcanvas-overlay").on('click', function(){
  $(".tp-header-search-bar").removeClass("tp-search-open");
  $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
});

 // search bar

$("[data-background]").each(function (){
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

// data color
$("[data-color").each(function () {
  $(this).css("color", $(this).attr("data-color"))
  })
// data bg color
$("[data-bg-color").each(function () {
  $(this).css("background-color", $(this).attr("data-bg-color"))
  })
  $('.popup-image').magnificPopup({
  type: 'image'
  // other options
  });
  $('.popup-video').magnificPopup({
  type: 'iframe'
  // other options
  });

// testimonial slider
        var swiper = new Swiper(".tp-blog-active", {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: {
            enabled: true,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".tp-swiper-blog-button-next",
            prevEl: ".tp-swiper-blog-button-prev",
            },
        });
// testimonial slider
        var swiper = new Swiper(".tp-testimonial-active", {
            slidesPerView: 1,
            spaceBetween: 30,
            keyboard: {
            enabled: true,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".tp-swiper-test-button-next",
            prevEl: ".tp-swiper-test-button-prev",
            },
        });
// tp-test-slider
        var swiper = new Swiper(".tp-test-active", {
            slidesPerView: 4,
            spaceBetween: 30,
            keyboard: {
            enabled: true,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".tp-review-button-next",
            prevEl: ".tp-review-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                
              },
              768: {
                slidesPerView: 2,
                
              },
              992: {
                slidesPerView: 3,
                
              },
              1200: {
                slidesPerView: 4,
                
              },
            },
        });




// testimonial-with-thumb-slider
        var swiper_thumb = new Swiper(".tp-testimonial-thumb-active", {
          loop: true,
          slidesPerView: 3,
          loopedSlides: 1,
          centeredSlides: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        
        var swiper_content = new Swiper(".tp-testimonial-content-active", {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
          centeredSlides: false,
          // thumbs: {
          //   swiper: swiper_thumb,
          // },
        });

        swiper_thumb.controller.control = swiper_content;
        swiper_content.controller.control = swiper_thumb;
        
          // brand slider 
    var swiper = new Swiper(".tp-brand-top-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
    });

    // brand slider  
    var swiper = new Swiper(".tp-brand-bottom-active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });
    // brand-title slider  
    var swiper = new Swiper(".tp-brand-title-active", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    // brand-normal slider
    var swiper = new Swiper(".tp-brand-normal-active", {
      slidesPerView: 5,
      spaceBetween: 30,
      keyboard: {
      enabled: true,
      },
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      navigation: {
      nextEl: ".tp-swiper-team-button-next",
      prevEl: ".tp-swiper-team-button-prev",
      },
      breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
            
          },
          992: {
            slidesPerView: 3,
            
          },
          1200: {
            slidesPerView: 5,
            
          },
        },
  });

    $('.popup-image').magnificPopup({
      type: 'image'
      // other options
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
      // other options
    });

    // tpteam slider
    var swiper = new Swiper(".tp-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
        enabled: true,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".tp-swiper-team-button-next",
        prevEl: ".tp-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              
            },
            768: {
              slidesPerView: 2,
              
            },
            992: {
              slidesPerView: 3,
              
            },
            1200: {
              slidesPerView: 4,
              
            },
          },
    });
    if ($('.grid').length != 0) {
    var $grid = $('.grid').imagesLoaded( function() {
      $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: 1
        }
      })
    });

// filter items on button click
$('.tp-portfolio-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for-menu-active-class
$('.tp-portfolio-filter button').on('click', function (event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});
  }

   

    // tpproject slider
    var swiper = new Swiper(".tp-project-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
        enabled: true,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".tp-swiper-team-button-next",
        prevEl: ".tp-swiper-team-button-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              
            },
            768: {
              slidesPerView: 2,
              
            },
            992: {
              slidesPerView: 3,
              
            },
            1200: {
              slidesPerView: 4,
              
            },
          },
    });

    // wow

   

function wowAnimation() {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  wow.init();
}
  


    
    
if($('.jarallax').length){
  $('.jarallax').jarallax({
    speed: 0.2,
  });
}






})(jQuery);



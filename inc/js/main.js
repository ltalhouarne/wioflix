/*----------------------------------------
  HERO FLEXSLIDER
----------------------------------------*/
$(document).ready(function() {
  $('#main-slider').flexslider({
    animation: "fade",//effects
    slideshowSpeed: 5500,//duration
    controlNav: false,
    directionNav: false
  });
});



/*----------------------------------------
  MENU SIDE
----------------------------------------*/

$("#menu-close").click(function(e) {
   e.stopPropagation();
   $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
   e.stopPropagation();
   $("#sidebar-wrapper").toggleClass("active");
});
$(document).click(function(){
   if($("#sidebar-wrapper").hasClass('active')){
      $("#sidebar-wrapper").removeClass("active");
   }
});


/*----------------------------------------
    CAROUSEL - testimonial
----------------------------------------*/
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});


/*----------------------------------------
	TOOLTIP
----------------------------------------*/

$('.social-icons a, .social-icons-bottom a').tooltip();

/*----------------------------------------
  FLEXSLIDER
----------------------------------------*/

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    smoothHeight: true,
    touch: true,
    itemWidth: 120,
    itemMargin: 2,
    move: 2,
    minItems: 1,
    maxItems: 3
  });
});


/*----------------------------------------
  OWL-SLIDER - Screenshot Slider
----------------------------------------*/

$(document).ready(function() { 
$("#owl-screenshot").owlCarousel({
     
    items : 4, //10 items above 1000px browser width
    itemsDesktop : [1120,3], //5 items between 1120px and 941px
    itemsDesktopSmall : [940,2], // betweem 940px and 601px
    itemsTablet: [600,2], //2 items between 600 and 0
    itemsMobile : [400,1] // itemsMobile disabled - inherit from itemsTablet option

     
  })
});


/*----------------------------------------
  PAGE SCROLL
----------------------------------------*/
$('ul.sidebar-nav li a[href*=#]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


/*----------------------------------------
  MAGNIFIC POPUP VIMEO VIDEO
----------------------------------------*/

$(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title">Some caption</div>'+
                        '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%output=embed'
                    }
                },
                srcAction: 'iframe_src',
            },
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

$(document).ready(function() {
  $('.preview').magnificPopup({type:'image'});
});


/*----------------------------------------
  PORTFOLIO FILTER
----------------------------------------*/

// portfolio filter
  $(window).load(function(){'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector : '.portfolio-item',
      layoutMode : 'fitRows'
    });
    
    $portfolio_selectors.on('click', function(){
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({ filter: selector });
      return false;
    });
  });

/*----------------------------------------
  AJAX CONTACT FORM
----------------------------------------*/

// Contact form
  var form = $('.form-horizontal');
  form.submit(function(event){
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),
      beforeSend: function(){
        form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
      }
    }).done(function(data){
      form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
    });
  });

  
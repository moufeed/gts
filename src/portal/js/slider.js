function mainSlider() {
    var BasicSlider = $(".slider-active");
    var is_rtl =  BasicSlider.data("rtl");
 
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements); 
    });
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 4000, 
      fade: true,
      pauseOnHover : false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i>Prev</button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i>Next</button>',
      arrows: false,
      dots: true,
      rtl: is_rtl,
      cssEase: 'linear',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();



  // slider-three
  $(".slider-three-active").slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 400,
   
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
    ]
  });

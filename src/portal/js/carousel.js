$(document).ready(()=>{
   if($(".testimonial-active").length){
    $(".testimonial-active").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        } 
    });
   }

   if($(".clients-active").length){
    $(".clients-active").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        rtl: ($(".clients-active").attr('dir') == 'rtl' ? true : false),
        responsive: {
          0: {
            items: 2
          },
          320: {
            items: 2
          },
          480: {
            items: 3
          },
          767: {
            items: 5
          },
          991: {
            items: 6
          },
          1000: {
            items: 6
          }
        }
      });
   }

})
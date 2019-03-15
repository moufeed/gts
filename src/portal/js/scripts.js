  $(document).ready(()=>{
     

  // mobile menu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanRevealPosition: window.language  == "ar" ? "left" :"right"
  });


     // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  var height = sticky.height();

  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 400) {
      sticky.removeClass('sticky');
      $('body').css('padding-top',0);
    } else {
      sticky.addClass('sticky');
      $('body').css('padding-top',height);
    }
  });

  
if($('[data-parallax]')){
  $.each($('[data-parallax]') ,function(key,item){
      let $this = $(item);
      let src = $this.data('parallax');
      $this.css("background-image",`url("${src}")`);
      $(window).scroll(function(e){
          var sc = $(this).scrollTop() ;
          $this.css('background-position-y',`${sc* 0.35  * -1}px`);
      })
  }) 
}
 })

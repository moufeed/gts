  $(document).ready(()=>{
     

  // mobile menu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    //meanRevealPosition: "left"
  });


     // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 400) {
      sticky.removeClass('sticky');
    } else {
      sticky.addClass('sticky');
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

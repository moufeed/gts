 

 $(document).ready(()=>{
     



     // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 180) {
      sticky.removeClass('sticky');
    } else {
      sticky.addClass('sticky');
    }
  });
 })
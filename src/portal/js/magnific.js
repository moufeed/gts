var template = '<div class="mfp-figure">'+
                '<div>'+
                '<div class="mfp-counter"></div>'+
            '<div class="mfp-close"></div>'+
            '</div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              
            '</div>'+
          '</div>';

 

$('.pro-item-img').magnificPopup({
type: 'image',
mainClass: 'mfp-gallery',
closeMarkup: '<button title="%title%" type="button" class="mfp-close btn btn-close">&#215;</button>',
image: {
   markup: template,
      titleSrc: function (item) {
          
        return item.el.children()[0].innerHTML;
    }  
    
}, 
callbacks: {
    elementParse: function (item) {
        
        if ($(item.el).hasClass('video-link')) {
            item.type = 'iframe';
        } else {
            item.type = 'image';
        }
    }
},
gallery: {
    enabled: true,
    tCounter: '%curr% / %total%'
},
zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});

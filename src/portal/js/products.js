function getdata(url, $this) {
  fetch(url)
    .then(res => res.json())
    .then(response => {
      $('.product-list-item').removeClass('active');
      $this.addClass('active');
      $('#product-content').html(response.content);
      $('#loader').css('display', 'none');
    });
}

$('.product-list-item').on('click', function(event) {
  event.preventDefault();
  let $this = $(this),
    url = $this.data('href');
  $('#loader').css('display', 'flex');
  getdata(url, $this);
});

setTimeout(function() {
  if (window.location.hash.length > 0) {
    var hash = window.location.hash.replace('#', '');
    if (window.language == 'ar') {
      hash = decodeURIComponent(hash);
    }
    let $this = $(document).find('.product-list-item[data-hash="' + hash + '"]');
    let url = $this.data('href');
    $('#loader').css('display', 'flex');
    getdata(url, $this);
  }
});

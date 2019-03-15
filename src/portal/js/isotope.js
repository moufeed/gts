
 var $grid = $(".products-list").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

 

  $(".products-menu").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
});


  //for menu active class
  $(".products-menu button").on("click", function(event) {
    $(this)
      .siblings(".active")
      .removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
//for carousel controls
$(function () {
  $('.next').click(function () { $('.carousel').carousel('next'); return false; });
  $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });

//will go from transparent navbar to white
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 510);
    // $("#loginButton").toggleClass('scrolled', $(this).scrollTop() > 510);
    $(".navButton").toggleClass('scrolled', $(this).scrollTop() > 510);
  });

})

$(function () {
  $(".signUpButton").click(function () {
      $("#signUpModal").modal("show");
  })
  $("#loginButton").click(function () {
      $("#loginModal").modal('show');
  });
})

$('#carouselExample').on('slide.bs.carousel', function (e) {

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});




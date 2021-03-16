//for carousel controls
$(function () {
  $('.next').click(function () { $('.carousel').carousel('next'); return false; });
  $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });

//will go from transparent navbar to white
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 510);
  });

//checking the size of the window
  $(window).resize(function () {
    let width = $(window).width();  
  
    if (width < 992){
      $.fn.addingClasses();
      break;
    }
  
  });

  $.fn.addingClasses = function () {
    $(".trainer-bio-block").addClass("carousel-item");
    $(".top-carousel").children(".row").removeClass(".row");
    $(".top-carousel").removeClass(".carousel-item")
  }

  // $.fn.removingClasses = function () {
  //   $(".trainer-bio").removeClass("carousel-item")
  // }

})




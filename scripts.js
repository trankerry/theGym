$(function () {
  $('.next').click(function () { $('.carousel').carousel('next'); return false; });
  $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });


  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 510);
  });

})
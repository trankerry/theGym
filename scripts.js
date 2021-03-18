//for carousel controls
$(function () {
  $('.next').click(function () { $('.carousel').carousel('next'); return false; });
  $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });

//will go from transparent navbar to white
  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 510);
  });

})

$(function () {
  $("#signUpButton").click(function () {
      $("#signUpModal").modal("show");
  })
  $("#loginButton").click(function () {
      $("#loginModal").modal('show');
  });
})





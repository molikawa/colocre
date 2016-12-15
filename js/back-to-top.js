$(function() {
  $(window).scroll(function () {
    if ($('#mission').scrollTop() < $(this).scrollTop()) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $('#back-to-top').tooltip('show');
});

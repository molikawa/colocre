$('<img>').attr('src', 'img/bg-default.jpg');
$('#body-wrapper').append('<div id="bg-sec0"></div>');
$('<img>').attr('src', 'img/bg-mission.jpg');
$('<img>').attr('src', 'img/bg-works.jpg');
$('<img>').attr('src', 'img/bg-rolls.jpg');
$('<img>').attr('src', 'img/bg-members.jpg');
$('<img>').attr('src', 'img/bg-news.jpg');
$(function() {
  var secTops = new Array();
  var navClickFlug = false;
  var pageHeight = $('body').outerHeight(true);
  var bgImages = new Array('bg-default.jpg',  /* bg0: header */
              'bg-mission.jpg',  /* bg1: bg-mission.jpg */
              'bg-works.jpg',    /* bg2: bg-works.jpg */
              'bg-rolls.jpg',    /* bg3: bg-rolls.jpg */
              'bg-members.jpg',  /* bg4: bg-members.jpg */
              'bg-news.jpg',    /* bg5: bg-news.jpg */
              'bg-default.jpg');  /* bg6: bg-default.jpg for contact  */
  secTops[0] = $('header').offset().top;
  $('section').each(function (i) {
    secTops[i+1] = $(this).offset().top;
  });
  /*secTops[secTops.length] = $('footer').offset().top;*/
  
  var timer = false;
  $(window).resize(function() {
    if (false != timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      pageHeight = $('body').outerHeight(true);
      secTops[0] = $('header').offset().top;
      $('section').each(function (i) {
        secTops[i+1] = $(this).offset().top;
      });
    }, 200);
  });
  
  var curSecNum = -1;
  $(window).scroll(function () {
    for (var i = secTops.length-1; 0 <= i; --i) {
      if ((secTops[i] - 200) < $(window).scrollTop()) {
        changeBgImage(i);
        break;
      }
    }
  });
  function changeBgImage(secNum) {
    if ((secNum != curSecNum) && (false == navClickFlug)) {
      $('#bg-sec'+curSecNum)
        .fadeOut(500, function() {
          $(this).remove();
      });
      $('#body-wrapper').append('<div id="bg-sec'+secNum+'"></div>');
      $('#bg-sec'+secNum)
        .height(pageHeight)
          .css('display','none')
            .fadeIn(500);
      curSecNum = secNum;
    }
  }
  $('.global-nav li').click(function(){
    navClickFlug = true;
    var num = $(this).index();
    $('html,body').animate({ scrollTop: seqTops[num] }, 'slow', function() {
      navClickFlug = false;
      changeBgImage(num);
    });
    return false;
  });
});


/* 読み込み順は登場順 */
$('<img>').attr('src', 'img/bg-default.jpg');
$('<img>').attr('src', 'img/bg-mission.jpg');
$('<img>').attr('src', 'img/bg-works.jpg');
$('<img>').attr('src', 'img/bg-way.jpg');
$('<img>').attr('src', 'img/bg-rolls.jpg');
$('<img>').attr('src', 'img/bg-members.jpg');
$('<img>').attr('src', 'img/bg-news.jpg');
$(function() {
  var secTops = new Array();
  var navClickFlug = false;
  var pageHeight = $('body').outerHeight(true);
  var bgImages = new Array('bg-default.jpg',/* bg0 (title)*/
                  'bg-mission.jpg',         /* bg1 */
                  'bg-works.jpg',           /* bg2 */
                  'bg-way.jpg',             /* bg3 */
                  'bg-rolls.jpg',           /* bg4 */
                  'bg-members.jpg',         /* bg5 */
                  'bg-news.jpg',            /* bg6 */
                  'bg-default.jpg');        /* bg7 (Contact) */
  secTops[0] = $('header').offset().top;
  $('section').each(function (i) {
    secTops[i+1] = $(this).offset().top;
  });
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
  var curSecNum = 0;
  $('#body-wrapper').css('background', 'url("img/bg-default.jpg")');
  $(window).scroll(function () {
    for (var i = secTops.length-1; 0 <= i; --i) {
      if ((secTops[i] - 200) < $(window).scrollTop()) {
        changeBgImage(i);
        break;
      }
    }
  });
  function changeBgImage(secNum) {
    if ((curSecNum != secNum) && (false == navClickFlug)) {
      $('#body-wrapper').css('background', 'url("img/'+bgImages[secNum]+'")');
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


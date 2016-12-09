$(function() {
	var secTops = new Array();
	var moveFlug = false;
	var pageHeight = $('body').outerHeight(true);
	var bgColors = new Array('#ffffff', '#d7003a','#eb6238', '#f7c114', '#028760', '#ffffff', '#ffffff');
	secTops[0] = $('header').offset().top;
	$('section').each(function (i) {
		secTops[i + 1] = $(this).offset().top;
	});
	/*secTops[secTops.length] = $('footer').offset().top;*/
	var current = -1;
	$(window).scroll(function () {
		for (var i = secTops.length-1; 0 <= i; --i) {
			if ((secTops[i] - 150) < $(window).scrollTop()) {
				changeBgColor(i);
				break;
			}
		}
	});
	function changeBgColor(secNo) {
		if ((secNo != current) && (false == moveFlug)) {
			$('#bg'+current).fadeOut(500, function() {
				$(this).remove();
			});
			$('#body-wrapper').append('<div id="bg'+secNo+'"></div>');
			$('#bg'+secNo).height(pageHeight).css('display','none').fadeIn(500);
			current = secNo;
		}
	}
	$('.global-nav li').click(function(){
		moveFlug = true;
		var getNo = $(this).index() - 1;
		var secTop = $('.section-title').eq(getNo).offset().top;
		$('html,body').animate({ scrollTop: secTop }, 'slow', function() {
			moveFlug = false;
			changeBgColor(getNo);
		});
		return false;
	});
});
	


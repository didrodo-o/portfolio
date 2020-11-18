$(document).ready(function() {
	$('.slider').bxSlider({
	autoHover: true,
	auto: true,
	mode: 'fade',
	speed: 800
	});
	$('.s_slider').bxSlider({
	autoHover: true,
	auto: true,
	responsive: false,
	pager: false,
	speed: 1000,
	});
	
	$('.s_slider>div').each(function(){
		var main = $(this);
		var sub = $(this).find(' .s>div');
		main.hover(
			function(){
				sub.stop().animate({bottom: 0},200);
			},
			function(){
				sub.stop().animate({bottom: -25},200);
			}
		);
	});
});
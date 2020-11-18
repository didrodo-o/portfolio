$(function(){
	var menu = $('#nav > li');
	menu.hover(
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image>.on');
			var offImg = tg.find('.text_image>.off');
			var menuImg = tg.find('.menu_image');
			var imageHeight = menuImg.find('img').innerHeight();
			onImg.css('display','block');
			offImg.css('display','none');
			menuImg.animate({height: imageHeight},{duration:600, queue: false, easing: 'easeOutCubic'});
			//queue:false(.stop과 같은 효과)
		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image>.on');
			var offImg = tg.find('.text_image>.off');
			var menuImg = tg.find('.menu_image');
			var imageHeight = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImg.animate({height: imageHeight},{duration:600, queue: false, easing: 'easeOutCubic'});
		}
	);
});
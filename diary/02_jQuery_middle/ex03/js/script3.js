$(function(){
	var menu = $('#nav > li');
		function open(){
			var tg = menu.eq(2);
			var onImg = tg.find('.text_image>.on');
			var offImg = tg.find('.text_image>.off');
			var menuImg = tg.find('.menu_image');
			var imageWidth = menuImg.find('img').innerWidth();
			onImg.css('display','block');
			offImg.css('display','none');
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
		};
		function close(){
			var tg = menu.eq(2);
			var onImg = tg.find('.text_image>.on');
			var offImg = tg.find('.text_image>.off');
			var menuImg = tg.find('.menu_image');
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
		};
		open();
	menu.hover(
		function(){
			close();
			var tg = $(this);
			var onImg = tg.find('.text_image>.on');
			var offImg = tg.find('.text_image>.off');
			var menuImg = tg.find('.menu_image');
			var imageWidth = menuImg.find('img').innerWidth();
			onImg.css('display','block');
			offImg.css('display','none');
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
			//queue:false(.stop과 같은 효과)
			

		},
		function(){
			var tg = $(this);
			var onImg = tg.find('.text_image>.on');
			var offImg = tg.find('.text_image>.off');
			var menuImg = tg.find('.menu_image');
			var imageWidth = 0;
			onImg.css('display','none');
			offImg.css('display','block');
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
			open();
		}
	);
});
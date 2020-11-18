$(function(){
	var current = 0;
	var banner = $('#wrapper li');
	var timer;
	var interval = 1000;
	
	function slide(){
			var prev = banner.eq(current);
			move(prev, '0%','-100%');
			current++;
			if(current==banner.size()){current=0;}
			var next = banner.eq(current);
			move(next,'100%','0%');
	};
	function move(tg, start, end){
		tg.css('left',start)
			.stop()
			.animate({left:end},{duration:500, easing:'easeOutCubic'});
	};

	function starTimer(){
		timer = setInterval(slide, interval);
	};

	function stopTimer(){
		clearInterval(timer);
	};
	
	banner.hover(stopTimer,starTimer);
	starTimer();
	
});
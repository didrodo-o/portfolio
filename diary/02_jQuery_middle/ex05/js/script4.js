jQuery(document).ready(function(){
	var panel_width = $('.slider_panel > img').width();
	var panel_height = $('.slider_panel > img').height();
	var setIntervalId;
	
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	function moveSlider(index){
		var wilMoveLeft = -(index%3*panel_width);
		var wilMoveTop = Math.floor(index/3)*-panel_height;
		$('.slider_panel').animate({left:wilMoveLeft}, '500');
		$('.slider_panel').animate({top:wilMoveTop}, '500');
		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
		randomNum=index;
	};
	
	var randomNum = Math.round(Math.random()*5);
	moveSlider(randomNum);
	
	function timer(){
		setIntervalId = setInterval(function(){
			randomNum++;
			if(randomNum==$('.control_button').size()){randomNum=0;}
			moveSlider(randomNum);
		},3000)
	};

	timer();
	
	$('.animation_canvas').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	
	$('.left').click(function(){
		randomNum--;
		if(randomNum==-1){randomNum=$('.slider_image').size()-1};
		moveSlider(randomNum);
	});
	$('.right').click(function(){
		randomNum++;
		if(randomNum==$('.slider_image').size()){randomNum=0};
		moveSlider(randomNum);
	});
});
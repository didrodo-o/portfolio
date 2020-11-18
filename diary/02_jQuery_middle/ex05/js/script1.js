jQuery(document).ready(function(){
	var panel_width = $('.slider_panel > img').width();
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
		var wilMoveLeft = -(index*panel_width);
		$('.slider_panel').animate({left:wilMoveLeft}, '500');
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
	};
	var randomNum = Math.round(Math.random()*4);
	moveSlider(randomNum);
});
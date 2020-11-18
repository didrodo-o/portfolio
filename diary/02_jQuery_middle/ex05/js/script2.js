jQuery(document).ready(function(){
	var panel_width = $('.slider_panel > img').width();
	var panel_height = $('.slider_panel > img').height();
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
		
		
		/* if(index==0){
			$('.slider_panel').animate({left:0},'500');
			$('.slider_panel').animate({top:0},'500');
		}else if(index==1){
			$('.slider_panel').animate({left:-600},'500');
			$('.slider_panel').animate({top:0},'500');
		}else if(index==2){
			$('.slider_panel').animate({left:-1200},'500');
			$('.slider_panel').animate({top:0},'500');
		}else if(index==3){
			$('.slider_panel').animate({left:0},'500');
			$('.slider_panel').animate({top:-400},'500');
		} else if(index==4){
			$('.slider_panel').animate({left:-600},'500');
			$('.slider_panel').animate({top:-400},'500');
		} else if(index==5){
			$('.slider_panel').animate({left:-1200},'500');
			$('.slider_panel').animate({top:-400},'500');
		} */
		
		

		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left: 20},500);
		$('.slider_text[data-index!='+index+']').hide().animate({left: -300},500);
	};
	var randomNum = Math.round(Math.random()*5);
	moveSlider(randomNum);
});
jQuery(document).ready(function(){
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){//var x = e.pageX, y = e.pageY;
		balloon.css({left: x+5, top: y});
	};
	
	function showBalloon(){
		balloon.stop();
		balloon.css('opacity',0).show();
		balloon.animate({opacity:1},2000);
	};
	function hideBalloon(){
		balloon.stop();
		balloon.animate({opacity:0},2000,function(){balloon.hide()});
	};
	
	$('.showBalloon').each(function(){
		var elements = $(this);
		var text = elements.attr('title');
		elements.attr('title','');
		elements.hover(
			function(e){
				balloon.text(text);
				updateBalloonPosition(e.pageX, e.pageY);
				showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		elements.mousemove(function(e){
			updateBalloonPosition(e.pageX, e.pageY);
		});
	});
});
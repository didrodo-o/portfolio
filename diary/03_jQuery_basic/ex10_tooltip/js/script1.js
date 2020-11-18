jQuery(document).ready(function(){
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){//var x = e.pageX, y = e.pageY;
		balloon.css({left: x+5, top: y});
	};
	$('.showBalloon').each(function(){
		var elements = $(this);
		var text = elements.attr('title');
		elements.attr('title','');
		elements.hover(
			function(e){
				balloon.text(text);
				updateBalloonPosition(e.pageX, e.pageY);
				balloon.show();
			},
			function(){
				balloon.hide();
			}
		);
		elements.mousemove(function(e){
			updateBalloonPosition(e.pageX, e.pageY);
		});
	});
});
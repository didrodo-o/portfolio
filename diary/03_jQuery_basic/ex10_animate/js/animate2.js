jQuery(document).ready(function(){
	$('.box_in .box>div').each(function(){
		var box = $(this);
		var a = box.find('a');
		box.hover(
			function(){
				a.stop().animate({'margin-top':'-294px'},500);
			},
			function(){
				a.stop().animate({'margin-top':'0px'},500);
			}
		);
	});
});
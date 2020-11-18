jQuery(document).ready(function(){
/* 	$('.box_in .box>div').each(function(){
	var box = $(this);
	var a = box.find('a');
	box.hover(
		function(){
			a.stop().animate({'margin-top':'-294px'},500);
		},
		function(){
			a.stop().animate({'margin-top':'0px'},500);
		}
	); */
	$('.sub_list>div').each(function(){
		var sub = $(this);
		sub.hover(
			function(){
				sub.find('img').stop().animate({'margin-top':'-97px'},500);
			},
			function(){
				sub.find('img').stop().animate({'margin-top':'0px'},500);
			}
		);
	});
});
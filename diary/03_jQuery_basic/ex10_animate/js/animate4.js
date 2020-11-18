jQuery(document).ready(function(){
/* 	$('.banner .gogo1').hover(
		function(){
			$('.banner .gogo1>a').stop().animate({'margin-top':'-294px'},500);
		},
		function(){
			$('.banner .gogo1>a').stop().animate({'margin-top':'0px'},500);
		}
	); */
	$('.gogo li').each(function(){
		var sub = $(this);
		sub.hover(
			function(){
				sub.find('a').stop().animate({'margin-left':'75px'},500);
			},
			function(){
				sub.find('a').stop().animate({'margin-left':'0px'},500);
			}
		);
	});
});
jQuery(document).ready(function(){
	$('.item2').hide();
	$('.button1').css('background','orange');
	$('.button2').css('cursor','pointer');
	
	$('.button1').click(function(){
	$('.item2').hide();
	$('.item1').show();
	$('.button1').css('background','orange');
	$('.button2').css('background','black');
	$('.button2').css('cursor','pointer');		
	$('.button1').css('cursor','default');		
	});
	
	$('.button2').click(function(){
	$('.item1').hide();
	$('.item2').show();
	$('.button2').css('background','orange');
	$('.button1').css('background','black');
	$('.button1').css('cursor','pointer');				
	$('.button2').css('cursor','default');				
	});
});
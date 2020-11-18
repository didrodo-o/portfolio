$(document).ready(function(){
	var ht = $(window).height();
	$('section').height(ht);
	$(window).on('resize',function(){
		var ht = $(window).height();
		$('section').height(ht);
	});
	$('section').on('mousemove',function(e){
		var posX = e.pageX;
		var posY = e.pageY;
		var wt = $(window).width();
		$('.p').css({'right':(wt/2)-(posX/150),'top':320-(posY/150)});
		$('.p1').css({'right':(wt/2)-(posX/150),'top':50-(posY/150)});
		$('.p2').css({'right':(wt/2)+(posX/100),'top':-250+(posY/100)});
		$('.p3').css({'right':(wt/2)+(posX/20),'top':-250+(posY/20)});
	});
	
	
	$('.menu li').on('click',function(e){
		e.preventDefault();
		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = i*ht;
		$('html, body').stop().animate({'scrollTop': nowTop},2000);
	});
	
	$(window).on('scroll',function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		for(var i=0; i<5; i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
			$('.menu li').removeClass();
			$('.menu li').eq(i).addClass('on');
			};
		};
	});
	
	
	var size = $('section').size();
	$('section').on('mousewheel',function(event,delta){
		if(delta>0 && $(this).index()>=1){
			var prev = $(this).prev().offset().top;
			$('html, body').stop().animate({'scrollTop': prev},2000,'easeOutExpo');
		}
		else if(delta<0 && $(this).index()<=(size-2)){
			var next = $(this).next().offset().top;
			$('html, body').stop().animate({'scrollTop': next},2000,'easeOutExpo');
		};
	});
	
	$('.slider').bxSlider({
		controls: false,
		auto: true,
		pager: false,
		autoHover: true,
		pause: 3000
	 });
	 
	$('.s2 ul.sub li').each(function(){
		var Num = $(this).index()+1;
		$(this).click(function(){
			$('.s2 ul.sub li').removeClass('on');
			$(this).addClass('on');
			$('.s2 .main iframe').hide();
			$('.s2 .main').find('.v'+Num).show();
		});
	});
	
});













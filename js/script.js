$(document).ready(function(){
    var ht = $(window).height();
	var wt = $(window).width();
	$('section').height(ht);
	$(window).on('resize',function(){
		var ht = $(window).height();
		$('section').height(ht);
	});

	$('.r1').animate({top:'35%',left:'0'},900);
	$('.r2').animate({bottom:'50%',right:'10%'},900);
	$('.y1').animate({top:'15%',left:'25%'},1200);
	$('.y2').animate({bottom:'20%',right:'23%'},1200);
	$('.t_l_rf').animate({top:'-150',left:'-120'},1800);
	$('.t_l_gl').animate({top:'-110',left:'-350'},1000);
	$('.t_l_yl').animate({top:'320',left:'-45'},900);
	$('.t_l_yf').animate({top:'-85',left:'250'},1200);
	$('.t_r_rl').animate({top:'-190',right:'-120'},1200);
	$('.t_r_gf').animate({top:'100',right:'-120'},900);
	$('.t_r_yf').animate({top:'-70',right:'250'},1500);
	$('.b_r_rf').animate({bottom:'-110',right:'250'},1800);
	$('.b_r_rl').animate({bottom:'250',right:'-60'},1200);
	$('.b_r_gl').animate({bottom:'-180',right:'-100'},1000);
	$('.b_r_yl').animate({bottom:'20',right:'190'},800);
	$('.b_l_rl1').animate({bottom:'270',left:'70'},900);
	$('.b_l_rl2').animate({bottom:'-120',left:'260'},1200);
	$('.b_l_yf').animate({bottom:'-70',left:'150'},800);
	$('.b_l_gl').animate({bottom:'-200',left:'-150'},1800,function(){

		$('section').on('mousemove',function(e){
			var posX = e.pageX;
			var posY = e.pageY;
			$('.a1').css({'right':-(posX/30),'top':-(posY/30)});
			$('.a2').css({'right':+(posX/80),'top':-(ht)+(posY/80)});
			$('.a3').css({'right':+(posX/20),'top':-(ht*2)+(posY/20)});
		});
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

		for(var i=0; i<9; i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
			$('.menu li div').removeClass();
			$('.menu li div').eq(i).addClass('on');
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

	var typingBool = false;
	var typingIdx=0;
	var liIndex = 0;
	var liLength = $(".typing-txt>ul>li").length;

	// 타이핑될 텍스트를 가져온다
	var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
	typingTxt=typingTxt.split(""); // 한글자씩 자른다.
	if(typingBool==false){ // 타이핑이 진행되지 않았다면
		typingBool=true;
		var tyInt = setInterval(typing,100);
	}

	function typing(){
		$(".typing ul li").removeClass("on");
		$(".typing ul li").eq(liIndex).addClass("on");
		if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
			$(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
			typingIdx++;
		} else{
			if(liIndex<liLength-1){
				//다음문장으로  가기위해 인덱스를 1증가
				liIndex++;
				//다음문장을 타이핑하기위한 셋팅
				typingIdx=0;
				typingBool = false;
				typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
				//다음문장 타이핑전 1초 쉰다
				clearInterval(tyInt);
				//타이핑종료
				setTimeout(function(){
				//1초후에 다시 타이핑 반복 시작
				tyInt = setInterval(typing,100);
			},300);
			} else if(liIndex==liLength-1){
				//마지막 문장까지 써지면 반복종료
				clearInterval(tyInt);
			}
		}
	}

	$('.chart1').easyPieChart({
        barColor: '#d64236',
		trackColor: '#fff',
		scaleColor: '#fff',
		lineCap: 'round',
		lineWidth: 20,
		size: 180,
		animate: 1000,
		onStart: $.noop,
		onStop: $.noop
    });

	$('.chart2').easyPieChart({
        barColor: '#1a8a66',
		trackColor: '#fff',
		scaleColor: '#fff',
		lineCap: 'round',
		lineWidth: 20,
		size: 180,
		animate: 1000,
		onStart: $.noop,
		onStop: $.noop
    });

	$('.chart3').easyPieChart({
        barColor: '#d64236',
		trackColor: '#fff',
		scaleColor: '#fff',
		lineCap: 'round',
		lineWidth: 20,
		size: 180,
		animate: 1000,
		onStart: $.noop,
		onStop: $.noop
    });

	$('.chart4').easyPieChart({
        barColor: '#1a8a66',
		trackColor: '#fff',
		scaleColor: '#fff',
		lineCap: 'round',
		lineWidth: 20,
		size: 180,
		animate: 1000,
		onStart: $.noop,
		onStop: $.noop
    });

	AOS.init({
		duration: 1200
	});

	$('.pv').each(function(){
		var scroll_img = $(this).find('img');
		var img_ht = scroll_img.height();
    var scroll = $(window).scrollTop();
		scroll.hover(
			function(){
				scroll.stop().animate({'top': 264-img_ht});
			},
			function(){
				scroll.stop().animate({'top': 0});
			}
		);
	});

	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){//var x = e.pageX, y = e.pageY;
		balloon.css({left: x+5, top: y});
	};
	$('.pv>a').each(function(){
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

	$('.br ul li').each(function(){
		var br = $(this);
		br.hover(
			function(){
				br.stop().animate({'opacity':1});
			},
			function(){
				br.stop().animate({'opacity':0.7});
			}
		);
	});
	var menu = $('.sub > li');
		function open(){
			var tg = menu.eq(0);
			var menuImg = tg.find('.menu_image');
			var imageWidth = menuImg.find('img').innerWidth();
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
		};
		function close(){
			var tg = menu.eq(0);
			var menuImg = tg.find('.menu_image');
			var imageWidth = 0;
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
		};
		open();
	menu.hover(
		function(){
			close();
			var tg = $(this);
			var menuImg = tg.find('.menu_image');
			var imageWidth = menuImg.find('img').innerWidth();
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
			//queue:false(.stop과 같은 효과)


		},
		function(){
			var tg = $(this);
			var menuImg = tg.find('.menu_image');
			var imageWidth = 0;
			menuImg.animate({width: imageWidth},{duration:600, queue: false, easing: 'easeOutCubic'});
			open();
		}
	);

	$('.s8').ripples({
        resolution: 256,
        perturbance: 0.04
    });

});

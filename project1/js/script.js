jQuery(document).ready(function(){
	a=true;
	$('.site_bar_btn').click(function(){
		if(a){
			$('.site_bar').stop().animate({'top':'0'},500);
			$('.site_bar_btn').html('<img src="img/site_bar_on.png" alt="분야별업무사이트 닫기"/>');
			a=false;
		}
		else{
			$('.site_bar').stop().animate({'top':'-296px'},500);
			$('.site_bar_btn').html('<img src="img/site_bar_off.png" alt="분야별업무사이트 보기"/>');
			a=true;
		}
	});
	/* 사이트 퀵바 */
	$('#nav>li').each(function(){
		var menu = $(this);
		var twodepth = menu.find('.width100');
		menu.hover(
			function(){
				twodepth.slideDown(500);
			},
			function(){
				twodepth.hide();
			}
		);
	});
	/* 메뉴호버 */
	b=true;
	$('.total_btn').click(function(){
		if(b){
			$('.total_menu').slideDown();
			b=false;
		}
		else{
			$('.total_menu').slideUp();
			b=true;
		}
	});
	$('.total_m_width>a').click(function(e){
		e.preventdefault;
		$('.total_menu').slideUp();
	});
	/* 햄버거메뉴 */
	
	var panel_width = $('.slider_panel >a > img').width();
	var setIntervalId;
	
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	function moveSlider(index){
		var wilMoveLeft = -(index*panel_width);
		$('.slider_panel').stop().animate({left:wilMoveLeft}, 500);
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		randomNum=index;
	};
	
	var randomNum = Math.round(Math.random()*10);
	moveSlider(randomNum);
	
	function timer(){
		setIntervalId = setInterval(function(){
			randomNum++;
			if(randomNum==$('.control_button').size()){randomNum=0;}
			moveSlider(randomNum);
		},4000)
	};

	timer();
	
	$('#main_slider').hover(clearInterval(setIntervalId),timer());
	
	$('#main_slider .left').click(function(e){
		e.preventDefault();
		randomNum--;
		if(randomNum==-1){randomNum=$('#main_slider .slider_image').size()-1};
		moveSlider(randomNum);
	});
	$('#main_slider .right').click(function(e){
		e.preventDefault();
		randomNum++;
		if(randomNum==$('#main_slider .slider_image').size()){randomNum=0};
		moveSlider(randomNum);
	});
	/* 슬라이더 */
	
	$('.tabs a').click(function(e){
		e.preventDefault();
		var tab = $(this);
		var panel = $(tab.attr('href'));
		
		$('.tabs a').removeClass('on');
		tab.addClass('on');
		$('.panel').hide();
		panel.show();
	});
	/* 게시판 */
	
	var menu = $('.m_user > li');
		function open(){
			var tg = menu.eq(0);
			var on_img = tg.find('.m_user_tab>.on');
			var off_img = tg.find('.m_user_tab>.off');
			var user_panel = tg.find('.m_user_panel');
			on_img.css('display','block');
			off_img.css('display','none');
			user_panel.animate({width: '600px'},{duration:600, queue: false, easing: 'easeOutCubic'});
		};
		function close(){
			var tg = menu.eq(0);
			var on_img = tg.find('.m_user_tab>.on');
			var off_img = tg.find('.m_user_tab>.off');
			var user_panel = tg.find('.m_user_panel');
			on_img.css('display','none');
			off_img.css('display','block');
			user_panel.animate({width: '0'},{duration:600, queue: false, easing: 'easeOutCubic'});
		};
		open();
		menu.hover(
			function(){
				close();
				var tg = $(this);
				var on_img = tg.find('.m_user_tab>.on');
				var off_img = tg.find('.m_user_tab>.off');
				var user_panel = tg.find('.m_user_panel');
				var imageWidth = user_panel.find('img').innerWidth();
				on_img.css('display','block');
				off_img.css('display','none');
				user_panel.animate({width: '600px'},{duration:600, queue: false, easing: 'easeOutCubic'});
				//queue:false(.stop과 같은 효과)
			

		},
		function(){
			var tg = $(this);
			var on_img = tg.find('.m_user_tab>.on');
			var off_img = tg.find('.m_user_tab>.off');
			var user_panel = tg.find('.m_user_panel');
			on_img.css('display','none');
			off_img.css('display','block');
			user_panel.animate({width: '0'},{duration:600, queue: false, easing: 'easeOutCubic'});
			open();
		}
	);
	/* cont1 */
	
	$('.cont2 ul li').each(function(){
		var cont = $(this);
		var cont_img = cont.find('img');
		var img_num = cont.index()+1
		cont.hover(
			function(){
				cont_img.attr('src','img/bg_mbli0'+(img_num)+'_over.png');
			},
			function(){
				cont_img.attr('src','img/bg_mbli0'+(img_num)+'.png');
			}
		);
	});
	/* cont2 */
	
	$(window).scroll(
		function(){
		var scroll_top = $(document).scrollTop();
		if (scroll_top < 50)
			{
				scroll_top = 50;
			}
		$(".quick_bar").stop().animate( { "top" : scroll_top }, {easing: 'easeOutCubic'});
		}
	);
	/* 퀵바 */
});
















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
	
	
	
	$('.menu_tab').each(function(){
		var menu_tab=$(this);
		var menu_tab_a=menu_tab.find('a');
		c=true;
		menu_tab_a.click(function(){
			var open_menu = $(this).next();
			if(c){
				open_menu.slideDown();
				c=false;
			}else{
				open_menu.slideUp();
				c=true;
			}
		});
	});
	/* 사이드메뉴 */
	
	$('.cont div').each(function(){
		var map_list = $(this);
		var map_num = map_list.index()+1;
		map_list.hover(
			function(){
			$('.cont').css({'background-position':'-1150'*map_num+'px'});
			},
			function(){
				$('.cont').css({'background-position':'0'});
			}
		);
	});
	
});
















jQuery(document).ready(function(){
	$('.slider').bxSlider({
		speed: 500,        // 이동 속도를 설정
		adaptiveHeight: true,
		pager: true, 
		slideMargin: 0,    // 슬라이드간의 간격
		auto: true,        // 자동 실행 여부
		autoHover: true,   // 마우스 호버시 정지 여부
		controls: true    // 이전 다음 버튼 노출 여부
		});
		
 	$('.dept1').hover(
		function(){
			$('.dept2').show();
		},
		function(){
			$('.dept2').hide();
		}
	);
	
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
	
	$('#lnb_mt>img').click(function(){
		$('header').css("height","100%"); 
		$('#menu_mt').fadeIn("500",function(){
			$('#menu_mt>div').animate({right:'0'});
			$('#menu_mt>img').animate({right:'72%'});
		});
	});
	
	$('#menu_mt>img').click(function(){
		$('#menu_mt>div').animate({right:'-90%'});
		$('#menu_mt>img').animate({right:'-12%'},"500",function(){
			$('#menu_mt').fadeOut("500",function(){
				$('header').css("height","auto");
			});
			
		});
	});
});	
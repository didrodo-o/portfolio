jQuery(document).ready(function(){
	var tab = $('#wrap #tab li');
	var content = $('#content > div');
	tab.on('click',function(e){
		e.preventDefault();
		var tg = $(this);
		var tc = tg.find('>a');
		tab.find('a').removeClass('on');
		tc.addClass('on');
		i = tg.index();
		content.css('display','none');
		content.eq(i).show();
	});
	
	var el = $('#content>div>img');
	var urls = [
	'http://www.naver.com',
	'http://www.daum.net',
	'http://www.hschool.co.kr',
	'http://www.nate.com'
	];
	el.on({
		mouseover:function(){
			var tg = $(this);
			tg.addClass('on');
		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on');
		},
		click:function(event){
			event.preventDefault();
			var tg = $(this);
			var i = tg.parent().index();
			var linkURL = urls[i]
			window.open(linkURL);//새창에서 실행
			//location.href = linkURL(자기 창에서 실행)
		}
	});
	
});
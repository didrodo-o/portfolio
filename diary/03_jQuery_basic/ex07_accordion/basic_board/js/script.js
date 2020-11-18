jQuery(document).ready(function(){
	/* alert('a'); */
	$('#board').each(function(){
		var dl = $(this);
		var allDt = dl.find('.title2');
		var allDd = dl.find('.content_wrap');
		allDd.hide();
		allDd.eq(0).show();
		allDt.css('cursor','pointer');
		allDt.eq(0).css('cursor','default');
		
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.parent('.contents').find('.content_wrap');
			allDd.hide();
			dd.show();
			allDt.css('cursor','pointer');
			dt.css('cursor','default');
		});
		});
});
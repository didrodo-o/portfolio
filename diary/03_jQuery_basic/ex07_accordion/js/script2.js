jQuery(document).ready(function(){
	/* alert('a'); */
	var classClosed = 'closed';
	$('.accordion').each(function(){
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');
		function closeAll(){
			allDt.addClass(classClosed);
			allDd.addClass(classClosed);
		};
		function open(dt, dd){
			dt.removeClass(classClosed);
			dd.removeClass(classClosed);
		};
		
		closeAll();
		
		
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			closeAll();
			open(dt, dd);
		});
	});
});
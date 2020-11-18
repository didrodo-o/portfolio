jQuery(document).ready(function(){
	$('.animal').each(function(){
		var name = $(this).text();
		// var cat = name(0)
		//var dog = name(1)
		alert(name);
	});
});
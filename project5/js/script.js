$(document).ready(function() {
	$('#nav').animate({top:'-80px'},{duration:1000, easing:'easeInOutBack'});
	setInterval(function(){$('#banner').animate({bottom:'70px'},1500)
	.animate({bottom:'50px'},1500);});
});
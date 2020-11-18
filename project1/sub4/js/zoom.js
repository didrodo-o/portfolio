var seemSize = 1,
 zoomSize = 1,
 browser = navigator.userAgent.toLowerCase();
function zoomIn()
	{
		seemSize += 0.05;
		zoomSize *= 1.2;
		zoom();
	}
function zoomOut()
	{
		seemSize -= 0.05;
		zoomSize /= 1.2;
		zoom();
	}
function zoom()
	{
		if (browser.indexOf("firefox") != -1) { //브라우저가 firefox일때
		document.body.style.webkitTransform =    'scale('+seemSize+')';  
		document.body.style.webkitTransformOrigin = '50% 0 0'; //늘리고 줄였을때위치, 
		document.body.style.msTransform =   'scale('+seemSize+')'; 
		document.body.style.msTransformOrigin = '50% 0 0';
		document.body.style.transform = 'scale('+seemSize+')';
		document.body.style.transformOrigin='50% 0 0';
		document.body.style.OTransform = 'scale('+seemSize+')';
		document.body.style.OTransformOrigin='50% 0 0';
		}
		else{
		document.body.style.zoom = zoomSize;
		}
	}
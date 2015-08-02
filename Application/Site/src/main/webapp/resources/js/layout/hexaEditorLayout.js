	var outerLayout; 

	$(document).ready(function () { 

		var sizeScreen = $('.box').width() / 2;

		outerLayout = $('.box').layout({
			center__paneSelector: 	".outer-center",
			west__paneSelector: 	".outer-west", 
			west__size:				sizeScreen,
			west__minSize:			1,
			west__maxSize:			10000,
			spacing_open:			8,
			spacing_closed:			12
		});
	});
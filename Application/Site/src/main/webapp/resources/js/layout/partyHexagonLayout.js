	var outerLayout, middleLayout;

	$(document).ready(function () {

		outerLayout = $('.box').layout({
			center__paneSelector:	".outer-center",
			west__paneSelector:		".outer-west",
			east__paneSelector: 	".outer-east",
			spacing_open:			8,
            spacing_closed:			12,
			center__minSize: 		10,
			center__size:			450,
			west__size:				450,
            west__minSize:			1,
            west__maxSize:			10000,
			east__size:				450,
			east__minSize:			1,
			east__maxSize:			10000,
			spacing_open:			8,
			spacing_closed:			12,
			center__onresize:		"middleLayout.resizeAll"
		});

		middleLayout = $('div.outer-west').layout({
			center__paneSelector:	".middle-center",
			south__size:			100,
			spacing_open:			8,
			spacing_closed:			12,
			south__minSize:			1,
			south__maxSize:			2000,
		});


	});

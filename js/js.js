var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200,
	speedAsDuration: true
});

$(function () {

	$(".works .container .all").on("mouseenter", function(){
		$(this).children().last().css("left", "0")
	})
	$(".works .container .all").on("mouseleave", function(){
		$(this).children().last().css("left", "-100%")
	})

})

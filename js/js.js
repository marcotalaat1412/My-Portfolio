
$(function () {

	$(".works .container .all").on("mouseenter", function(){
		$(this).children().last().css("left", "0")
	})
	$(".works .container .all").on("mouseleave", function(){
		$(this).children().last().css("left", "-100%")
	})
	$(".submit").click(function(){
		$(".alert").fadeIn(2000, function(){
			$(this).fadeOut();
		})
	})

})

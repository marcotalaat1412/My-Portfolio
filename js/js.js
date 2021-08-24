window.addEventListener('load', function () {
	var el = document.querySelectorAll('img.lightense');
	console.log(el)
	Lightense(el);
  }, false);
  
$(function () {

	/*
	================================
	Section My works 
	================================
	 */
	$(".works .container .all").on("mouseenter", function(){
		$(this).children().first().next().css("top", "0")
	})
	$(".works .container .all").on("mouseleave", function(){
		$(this).children().first().next().css("top", "-100px")
		$(this).children().last().removeClass("info")
	})
	$(".works .web-link .web-desc").click(function(){
		$(this).offsetParent().next().toggleClass("info")
		$(this).children().toggleClass("rotate")
	})
	/*
	================================
	Footer => Submit feedback 
	================================
	 */
	$(".submit").click(function(){
		$(".alert").fadeIn(2000, function(){
			$(this).fadeOut();
		})
	})

})

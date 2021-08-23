
$(function () {

	/*
	================================
	Images Zoom
	================================
	 */
	var $ = jQuery.noConflict();

	$(document).ready(function(){

		// Image zoom plugin code
		var zoomImage = $('.imageZoom');
		var zoomImageExtra = $('#imageZoomExtra');
		var zoomImagePlus = $('#imageZoomExtraPlus');
		var zoomImages = $('.zoom-images');

		zoomImage.imageZoom();
		zoomImageExtra.imageZoom({zoom : 200});
		zoomImagePlus.imageZoom({zoom : 300});

		zoomImages.each(function() {
			$(this).imageZoom();
		});

	});

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

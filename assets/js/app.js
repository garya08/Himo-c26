$(function() {

	var header = $("#header");
		headH = $("#header").height();


/* Smooth Scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data("scroll"),
			blockOffset = $(blockId).offset().top;   /* получение верхней координаты - blockOffset искомого блока */

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({		/* плавный переход к блоку */
			scrollTop: blockOffset - headH
		}, 500)							/* продолжительность анимации в милисекундах */


		header.removeClass("active");
		$("#nav").removeClass("active");
		$("#nav a").removeClass("active");
		$("#nav_toggle").removeClass("active");
	});

	/* Menu Nav Toggle*/
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();			/* убираем стандартное поведение кнопки*/

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
		header.toggleClass("active");
	});


	/* Slick slider */
	$('.intro-slider, .slider-notice').slick ({
		arrows: false,
		dots: true,
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000
	});



});
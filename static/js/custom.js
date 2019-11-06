$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();

	hH = $('.header').height();
	  //alert(hH);


	// cloning menu items in mobile
	$mobileNav = $('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content');
	$mobileNav.append($('.header .my-menu > ul').clone());

	// offcanvas toggle
	$('.toggle a').click(function(e){
		$('.offcanvas').addClass('show-offcanvas');
		$('body').addClass('pushed');
		$('.body-inactive').fadeIn(350);
		e.preventDefault();
	});

	// closing ups clicking on the screen
	$('.body-inactive, .coff a').click(function(e){
		$('.offcanvas').removeClass('show-offcanvas');
		$('.body-inactive').fadeOut(350);
		e.preventDefault();
	});

	$(".speaker-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay:true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]
	});

	$('.single-item').slick();

	$('.responsive').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay:true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
	        // You can unslick at a given breakpoint now by adding:
	        // settings: "unslick"
	        // instead of a settings object
	        ]
	    });
	
})




$(document).ready(function(){
	// Submenu DropDown
	$('#mobileNav li.hasDropdown > a').click(function(e){
		console.log("dasf")
		findSubMenuDisplay = $(this).parent().children('.dropdown').css('display');
		if(findSubMenuDisplay == 'block'){
			$(this).parent().children('.dropdown').slideUp(350);
		}
		else{
			$('.dropdown').slideUp(350);
			$(this).parent().children('.dropdown').slideDown(350);
		}
		e.preventDefault();
	})

	// $(document).on('click', 'a[href^="#"]', function (event) {
	// 	event.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: $($.attr(this, 'href')).offset().top -100
	// 	}, 500);
	// });

});

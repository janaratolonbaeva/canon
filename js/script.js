$(function () {

	// SLICK SLIDER
	$('.slider').slick({
		centerMode: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	//FANCYBOX
	$('[data-fancybox]').fancybox({
		youtube : {
			controls : 0,
			showinfo : 0
		}
	});
});
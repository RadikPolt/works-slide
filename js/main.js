"use strict";

const mainSlider = $('.ba-sliders');

mainSlider.slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	variableWidth: true,
	nextArrow: '.ba-slider-btn__next',
	prevArrow: '.ba-slider-btn__prev',
	responsive: [
		
		{
			breakpoint: 2700,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 2200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1250,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

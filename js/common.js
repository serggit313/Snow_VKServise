$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	})


    $('.block_3_slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_3_slider_btn_prev'),
	    nextArrow: document.querySelector('.block_3_slider_btn_next'),
		responsive: [
			{
				breakpoint: 1251,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 1,
				  dots: true,
				}
			},
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			  }
			}
		  ]
	  });


	  $('.block_5_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: document.querySelector('.block_5_slider_btn_prev'),
	    nextArrow: document.querySelector('.block_5_slider_btn_next'),
		responsive: [
			{
				breakpoint: 1271,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  dots: true,
				}
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			  }
			},
		  ]
	  });
});
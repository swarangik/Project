

(function ($) {
'use strict';
	$(document).ready(function () {
		
		// Home page carousel
		$('.slide-image').imagesLoaded( { background: true }, function () {
			$('.carousel-preloader').addClass('complete');
			
			$('#st-slider').carousel({
			  interval: 4000,
			  pause: false,
			  wrap: true,
			  keyboard: true
			});
			
			$('.carousel-progress').addClass('active');
			$('#st-slider').on('slide.bs.carousel', function () { 
				$('.carousel-progress').removeClass("active").delay(1).queue(function () {
					$(this).addClass("active").dequeue();
				});
			});
		});
		
		
		
		// Toggle panels ----------------------------------------------------------------------
		$('.toggle-panel').each(function () {
			var h = $(this).height();
			
			if ($(this).hasClass('active')) {
				$(this).height(h);
			} else {
				$(this).height(h).addClass('no-height');
			}
		});
		
		$('.toggle-header').on('click', 'a', function () {
			$(this).parent().toggleClass('active');
			var $panel = $(this).parent().next('.toggle-panel');
			
			if ( $panel.hasClass('active') ) {
				$panel.removeClass('active');
			}
			$panel.toggleClass('no-height');
			return false;
		});
		
		// To-top button-----------------------------------------------------------------	
		var btn = $('.totop');
		$(btn).hide();
		
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$(btn).fadeIn();
			} else {
				$(btn).fadeOut();
			}
		});
		
		$.easing.customEasing = function (p, x) {
			return Math.pow(p, x && x[0] || 4);
		};
		
		$(btn).on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 500, 'customEasing');
			return false;
});

// To-top button- end----------------------------------------------------------------
		
		// Clone main menu ---------------------------------------------------
		$('.main-nav .menu').clone().appendTo('.mobile-nav');

		// clone footer  ---------------------------------------------------
		$('.main-sidebar .footer').clone().appendTo('.mobile-overlay');
		


		// activate mobile menu on click -------------------------------------------------------
		$('.mobile-toggle').each(function () {
			$(this).on('click', function () {
				$('.mobile-overlay').toggleClass('active');
				$('.site').toggleClass('hidden');
				$('html, body').animate({ scrollTop: 0 }, 0);
				return false;
			});
		});
		
	});
})(jQuery);

(function ($) {
'use strict';
	$( window ).on('load', function () {
		
		// isotope layout
		var $container = $('#isotope-container');
		$container.isotope();	
		
		// filters
		$('#filters a').on('click', function () {
			var selector = $(this).attr('data-option-value');
			$container.isotope({
				filter: selector
			});
			
			var $this = $(this);
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
			return false;
		});
	});
})(jQuery);




$(document).ready(function() {
	$('.header').on('click', 'a', function(e) {

		e.preventDefault();

		var elemGoTo = $($(this).attr('href'));

		$('body').animate({
			scrollTop: elemGoTo.offset().top - 66
		});

		$('html').animate({
			scrollTop: elemGoTo.offset().top - 66
		});
	});

	$('body').on('click', '[data-goto]', function(e) {

		e.preventDefault();

		var elemGoTo = $($(this).data('goto'));

		$('body').animate({
			scrollTop: elemGoTo.offset().top - 66
		});

		$('html').animate({
			scrollTop: elemGoTo.offset().top - 66
		});
	});

	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: '', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated

      if ($(box).hasClass('accessible__in')) {
      	$('.accessible__heading').addClass('accessible__heading_animated');
      	$('.accessible__text').addClass('accessible__text_animated');
      	$('.accessible__photo').addClass('accessible__photo_animated');
      }
      if ($(box).hasClass('salary__in')) {
      	$('.salary__heading').addClass('salary__heading_animated');
      	$('.salary__text').addClass('salary__text_animated');
      	$('.salary__image').addClass('salary__image_animated');
      	$('.salary__button').addClass('salary__button_animated');
      }

      if ($(box).hasClass('care__in')) {
      	$('.care__heading').addClass('care__heading_animated');
      	$('.care__text').addClass('care__text_animated');
      }

      if ($(box).hasClass('what-important__in')) {
      	$('.what-important__heading').addClass('what-important__heading_animated');
      	$('.what-important__item').addClass('what-important__item_animated');
      	$('.what-important__button').addClass('what-important__button_animated');
      }
      if ($(box).hasClass('about__in')) {
      	$('.about__logo').addClass('about__logo_animated');
      	$('.about__text').addClass('about__text_animated');
      }
      if ($(box).hasClass('form-section__in')) {
      	$('.form-section__heading').addClass('form-section__heading_animated');
      	$('.form').addClass('form_animated');
      }
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
});
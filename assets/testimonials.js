$(document).ready(function() {
	/*$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});

	$('.video-slider').slick({
		slidesToShow: 1,
		arrows: true,
	});

	if ($(window).width() >= 1000) {
		$('.testimonials .container').masonry({
			itemSelector: '.testimonial',
			gutter: 40,
			horizontalOrder: true,
			transitionDuration: 0
		});
	}

	$('.menu-toggle').click(function() {
		$(this).toggleClass('open');
		$('.mobile-group').slideToggle(300);
	});

	$('.open-submenu').click(function(e) {
		e.preventDefault();
		$(this).closest('li').find('ul').toggle(0);
	});

	$(document).mouseup(function (e){
		let div = $('.header-menu li ul, .open-submenu');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header-menu li ul').hide();
		}
	});*/
  
  if ($(window).width() >= 1000) {
		$('.testimonials .container').masonry({
			itemSelector: '.testimonial',
			gutter: 40,
			horizontalOrder: true,
			transitionDuration: 0
		});
	}
  
  $(document).on("click", ".play-btn", function() {
    var videoPlayer = $(this).prev().prev().get(0);
    $(this).hide();
    $(this).prev().hide();
    videoPlayer.play();
  });
  
  $(document).on("click", "video", function() {
    var videoPlayer = $(this).prev().prev().get(0);
    
    if (videoPlayer.paused) {
		videoPlayer.play();
    } else {
      videoPlayer.pause(); 
    }
  });
  
  $('.video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('video').trigger('pause');
  });
  
  $(".video-screen").hide();
});

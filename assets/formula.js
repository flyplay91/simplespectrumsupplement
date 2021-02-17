$(document).ready(function() {
	$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});


	/*$('.slider-inside').slick({
		slidesToShow: 1,
		arrows: true,
		infinite: true,
		mobileFirst: true,
		responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      }
    }],
	});
    
    $('.video-slider').slick({
		slidesToShow: 1,
		arrows: true,
	});*/

	/*$('.menu-toggle').click(function() {
		$(this).toggleClass('open');
		$('.mobile-group').slideToggle(300);
	});

	$('.open-submenu').click(function(e) {
		e.preventDefault();
		$(this).closest('li').find('ul').toggle(0);
	});

	$('.testimonials .play-btn').click(function() {
		$(this).siblings('.video-screen').remove();
		$(this).siblings('video').show(0);
		$(this).remove();
	});

	$(document).mouseup(function (e){
		var div = $('.header-menu li ul, .open-submenu');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header-menu li ul').hide();
		}
	});*/
  
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
  
  	$(".video-screen").hide();
});

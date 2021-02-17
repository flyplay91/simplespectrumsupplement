$(document).ready(function() {
	$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});


	$('.video-slider').slick({
		slidesToShow: 1,
		arrows: true,
	});

	$('.slider-inside').slick({
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

	/*$('.menu-toggle').click(function() {
		$(this).toggleClass('open');
		$('.mobile-group').slideToggle(300);
	});

	$('.open-submenu').click(function(e) {
		e.preventDefault();
		$(this).closest('li').find('ul').toggle(0);
	});*/

	/*('.our-mission .play-btn').click(function() {
		$(this).siblings('.video-screen').remove();
		$(this).siblings('video').show(0);
		$('.video-title').remove();
		$(this).remove();
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

	$('.person .more').click(function(e) {
		e.preventDefault();
		let data = $(this).closest('.person');
		let popup = $('.popup');
		popup.find('h3').html(data.find('h3').html());
		popup.find('.text').html(data.find('.text').html());
		popup.find('img').attr('src', data.find('img').attr('src'));
		popup.find('img').attr('alt', data.find('img').attr('alt'));
		$('.popup-bg').fadeIn(300);

		if (data.hasClass('red-color')) popup.addClass('red-color');
		else if(data.hasClass('blue-color')) popup.addClass('blue-color');
		else if(data.hasClass('yellow-color')) popup.addClass('yellow-color');
	});

	$('.popup .close').click(function() {
		$('.popup-bg').fadeOut(300);
	});

	/*$(document).mouseup(function (e){
		let div = $('.header-menu li ul, .open-submenu');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.header-menu li ul').hide();
		}

		div = $('.popup');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.popup-bg').fadeOut(300);
		}
	});*/
});

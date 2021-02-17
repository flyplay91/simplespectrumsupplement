$(document).ready(function() {
	$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});

	$('.hero-slider').slick({
		slidesToShow: 1,
		infinite: false,
        arrows: false,
        dots: true,
        autoplay : true,
        autoplaySpeed : 8000,
        rows: 0,
	});

	$('.hero-slider').on('init', function () {
		jbResizeSlider();
	});

	function jbResizeSlider() {
		slickSlider = $('.hero-slider');
		let slides = slickSlider.find('.slick-slide');

		let max = 0;
		slides.each(function() {
			let height = $(this).height()*100/$(window).width();
			if (max < height) {
				max = height;
			}
		});

		slides.css('height', max + 'vw');
	}


	$('.video-slider').slick({
		slidesToShow: 1,
		arrows: true,
	});

	$('.testimonials-slider').slick({
		slidesToShow: 1,
		arrows: false,
		infinite: false,
		mobileFirst: true,
		responsive: [{
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 4,
	      }
	    }]
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
  
    $('.inside-omegas .cards').slick({
		slidesToShow: 1,
		arrows: false,
        dots: true,
		infinite: false,
		mobileFirst: true,
		responsive: [{
	      breakpoint: 1000,
	      settings: "unslick"
	    }],
	})

	$('.menu-toggle').click(function(e) {
		console.log("Mobile toggle");
		$(this).toggleClass('open');
		$('.mobile-group').slideToggle(300);
	});

	if ($(window).width() > 768) {
		var shouldHide = false;
		$('.has-child-menu').hover(function(e) {
			console.log("Menu Hover");
			shouldHide = false;
			$(this).find('ul').show(0);
		}, function(e) {
			shouldHide = true;
			var thisElem = this;
				setTimeout(function() {
					if (shouldHide) {
						$(thisElem).find('ul').hide(0);
					}
				}, 500);
		});

		$('.has-child-menu > ul').hover(function(e) {
			console.log("UL toggle");
			shouldHide = false;
		});

		$(document).mouseup(function (e){
			var div = $('.header-menu li ul, .open-submenu');
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				console.log("Mouse Up Hide");
				$('.header-menu li ul').hide();
			}
		});
	} else {
		$('.has-child-menu').click(function() {
			if ($(this).hasClass("open")) {
				$(this).find('ul').hide();
				$(this).removeClass("open");
			} else {
				$(this).find('ul').show();
				$(this).addClass("open");
			}
		});
	}
  
  $('.video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('video').trigger('pause');
  });
  
  $(document).on("click", ".play-btn", function() {
    var videoPlayer = $(this).prev().prev().get(0);
    console.log($(this).prev());
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

  $('body').on('click', '#AddToCartForm .selection .select ul li', function() {
  	var selectedVariantText = $('#AddToCartForm .selection .select .active').text();
	  if (selectedVariantText.indexOf('4-Pack') >= 0) {
	  	$('#AddToCartForm .selection .number > input').attr({'max': 4});
	  }
  });
  
  

});

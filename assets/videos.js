$(document).ready(function() {
  var videos = {
      science: [
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Benefits_of_Potassium.mp4?v=1594926474",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/How_prebiotics_help_our_immunity.mp4?v=1594926484",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Iodine___Immunity.mp4?v=1594926494",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/NAC_How_it_Helps_your_body_and_behaviors.mp4?v=1594926499",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_B1_and_how_it_helps_you.mp4?v=1594926506",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_C_and_How_it_helps_our_body.mp4?v=1594926514",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_D3_and_How_it_helps_immunity.mp4?v=1594926518",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Vitamin_K_and_what_it_does.mp4?v=1594926524",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_does_bioavailable_mean.mp4?v=1594926532",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_is_curcumin_and_why_we_need_it.mp4?v=1594926545",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_is_Methylation.mp4?v=1594926550",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_vitamins_aid_in_natural_detoxification.mp4?v=1594926557",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Zinc_Immunity_Benefits.mp4?v=1594926562",
      	"https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Importance_of_3rd_party_testing.mp4?v=1594926433",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Why_Do_We_Need_B12.mp4?v=1594926451",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Why_do_we_need_magnesium.mp4?v=1594926456",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Why_We_Include_Hydrocurc_Curcumin.mp4?v=1594926463"
        
      ],
      testimonials: [
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__3_Year_Old_Son.mp4?v=1594923174",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Aussie_Autism_Family.mp4?v=1594924421",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Day___Night_Difference.mp4?v=1594924475",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__From_Australia.mp4?v=1594924500",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/ReviewImprovementinExpressiveLanguage.mp4?v=1595475387",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Jacqueline_Laurita_2.mp4?v=1594924635",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Jacqueline_Laurita.mp4?v=1594924716",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Review__Mom_of_3.mp4?v=1594924750",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/The_Aspie_World_Review.mp4?v=1594924772",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Wake_Up_For_Autism.mp4?v=1594924809",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Simple_Spectrum_Review__Sunday_Share.mp4?v=1594924900"
      ],
      story: [
      	"https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Dosage_tips_for_Simple_Spectrum.mp4?v=1595470045",
      	"https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Immune_System_Benefits_of_Simple_Spectrum.mp4?v=1595470045",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Jacqueline_Laurita_and_Jodie_Gomes.mp4?v=1595470051",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Live_Q_A_with_Dr_Shay.mp4?v=1595470054",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/More_Dosage_Recommendations.mp4?v=1595470045",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Tips_for_Taking_our_Supplement.mp4?v=1595470045",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/What_makes_simple_spectrum_different.mp4?v=1595470044",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Getting_Insurance_To_Cover_Our_Product.mp4?v=1595474943",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Our_Mission_d3afe7aa-539e-45d7-b9fe-847b4f5496e9.mp4?v=1595475004",
        "https://cdn.shopify.com/s/files/1/0036/1820/9901/files/Third_Party_Testing_-_Because_We_Care_About_Our_Quality.mp4?v=1595475026"
      ]
    };
    
    var videoTemplate = '<div class="video-item {video_type}">'
            + '<div class="video">'
              + '<video controls>'
                + '<source src="{video_url}" type="video/mp4">'
              + '</video>'
              + '<div class="video-screen">'
              + '</div>'
              + '<div class="play-btn"></div>'
            + '</div>'
          + '</div>';
    
    loadVideos();
    function loadVideos() {
        var html = "";
        for (var i = 0; i < videos.science.length; i++) {
            var dColInst = JSON.parse(JSON.stringify(videoTemplate));
            dColInst = dColInst.replace(new RegExp("{video_url}", 'g'), videos.science[i]);
            dColInst = dColInst.replace(new RegExp("{video_type}", 'g'), "science");
          	$(".videos-grid").append(dColInst);
        }
        
        for (var i = 0; i < videos.story.length; i++) {
            var dColInst = JSON.parse(JSON.stringify(videoTemplate));
            dColInst = dColInst.replace(new RegExp("{video_url}", 'g'), videos.story[i]);
            dColInst = dColInst.replace(new RegExp("{video_type}", 'g'), "story");
          	$(".videos-grid").append(dColInst);
        }
        
        for (var i = 0; i < videos.testimonials.length; i++) {
            var dColInst = JSON.parse(JSON.stringify(videoTemplate));
            dColInst = dColInst.replace(new RegExp("{video_url}", 'g'), videos.testimonials[i]);
            dColInst = dColInst.replace(new RegExp("{video_type}", 'g'), "testimonials-vids");
          	$(".videos-grid").append(dColInst);
        }
    }
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }
    if (findGetParameter("science")) {
      showCategory("science");
      $(".desktop-categories li").removeClass("active");
      $(".desktop-categories li:nth-child(2)").addClass("active");
    } else {
      showCategory("testimonials");
    }
    function showCategory(type) {
      if (type == "all") {
        $(".video-item").show();
      } else {
        if (type == "testimonials") {
          type += "-vids";
        }
        $(".video-item").hide();
        $(".video-item." + type).show();
      }
    }
  
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

	$('.select .active').click(function() {
		$('.select ul').toggle(0);
	});

  	$('.desktop-categories li').click(function() {
      	console.log($(this).text().toLowerCase());
        if ($(this).text().toLowerCase() == "view all") {
          showCategory("all");
        } else {
          showCategory($(this).text().toLowerCase());
      	}
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.select li').click(function() {
		let active = $('.select .active');
		let activeText = active.text();
      	if ($(this).text().toLowerCase() == "view all") {
          showCategory("all");
        } else {
          showCategory($(this).text().toLowerCase());
      	}
      	console.log($(this).text().toLowerCase());
		active.html($(this).text());
		$(this).html(activeText);
		$('.select ul').hide(0);
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

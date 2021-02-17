jQuery(document).ready(function($) {
	/*$('.header-menu li.has-child-menu').each(function() {
		$(this).find('a').first().append('<span class="open-submenu"><i class="fas fa-angle-down"></i></span>')
	});

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
  
  	$('.dropdown-item').click(function() {
		$(this).toggleClass('opened');
		$(this).find('.text').slideToggle(300);
		$(this).siblings('.dropdown-item').removeClass('opened');
		$(this).siblings('.dropdown-item').find('.text').slideUp(300);
	});
});

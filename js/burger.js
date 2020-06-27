$(document).ready(function() {
	$('.header__burger').click(function(event) {
		// action on the event
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
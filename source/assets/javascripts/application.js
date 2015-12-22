// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
$(window).load(function(){

	// Price Radio Buttons Event (monthly/yearly)
	// =============================================
	$('.js-btn-monthly').on('click', function(){
        $('.js-yearly-layout').addClass('hidden');
        $('.js-monthly-layout').removeClass('hidden');
        $('.js-btn-package-monthly').removeClass('hidden');
        $('.js-btn-package-yearly').addClass('hidden');
	});
    
	$('.js-btn-yearly').on('click', function(){
        $('.js-yearly-layout').removeClass('hidden');
        $('.js-monthly-layout').addClass('hidden');
        $('.js-btn-package-monthly').addClass('hidden');
        $('.js-btn-package-yearly').removeClass('hidden');
	});
});

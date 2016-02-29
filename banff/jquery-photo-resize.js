
/// <reference path="jquery-1.5.1.min.js" />

/*
* Adjust photo on browser window resize
* 
* @example: $('selector').photoResize();
* 
* @example:
	$('selector').photoResize({
		bottomSpacing:"Bottom Spacing adjustment"
	});
*/

(function ($) {

	$.fn.photoResize = function (options) {

		var element	= $(this), 
			defaults = {
	            bottomSpacing: 0
			};
		
		$(element).load(function () {
			updatePhotoSize();

			$(window).bind('resize', function () {
				updatePhotoSize();
			});
		});

		options = $.extend(defaults, options);

		function updatePhotoSize() {
			var o = options, 
				photoHeight = $(window).height();
				photoWidth = $(window).width();
				
				aspectRatio = photoWidth/photoHeight;
				
				// alert ( photoHeight );
				// alert ( photoWidth );
				
				//alert ( photoWidth/photoHeight )
				
				//if (photoHeight > photoWidth) {
				if (aspectRatio < 1.6) {
					//alert ("portrait");
					$(element).attr('width', photoWidth - o.bottomSpacing);
					$(element).attr('height', 'auto');
				} else if (photoWidth > photoHeight) {
					//alert ("landscape");
					$(element).attr('height', photoHeight - o.bottomSpacing);
					$(element).attr('width', 'auto');
				}
		}
	};

}(jQuery));
"use strict";
jQuery(document).on('ready', function() {

	/* -------------------------------------
            HOME SLIDER
	-------------------------------------- */
	 $('#st-homeslider').owlCarousel({
		items: 1,
		nav:true,
		loop:true,
		dots: false,
		autoplay: true,
	});
	 

    /* -------------------------------------
            STICKY MENU Plugin
	-------------------------------------- */

	initStickyScrollBlock();
	// initialize fixed blocks on scroll
	function initStickyScrollBlock() {
		ResponsiveHelper.addRange({
			'768..': {
				on: function() {
					jQuery('.st-navigationarea').stickyScrollBlock({
						setBoxHeight: false,
						activeClass: 'sticky',
						positionType: 'fixed',
						extraTop: function() {
							var totalHeight = 0;
							jQuery('0').each(function() {
								totalHeight += jQuery(this).outerHeight();
							});
							return totalHeight;
						},
						showAfterScrolled: true
					});
				},
				off: function() {
					jQuery('.st-navigationarea').stickyScrollBlock('destroy');
				}
			}
		});
	}
	
});
 






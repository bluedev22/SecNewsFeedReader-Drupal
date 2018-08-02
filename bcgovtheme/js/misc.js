$(document).ready(function(event) {
	
	//Fix z-index youtube video embedding
	$(document).ready(function (){
	    $('iframe').each(function(){
	        var url = $(this).attr("src");
	        // CLD-1500: Disable related videos at the end of YouTube clips
	        if(url.indexOf("youtube") > -1) {
	        	if (url.indexOf("?") > -1) {
	        		// append if not already in URL
	        		if (url.indexOf("wmode=transparent") == -1)
	        			url = url + "&wmode=transparent";
	        		if (url.indexOf("rel=0") == -1)
	        			url = url + "&rel=0";
	        		
        			$(this).attr("src", url);
	        		
	        	} else {
	        		$(this).attr("src", url + "?wmode=transparent&rel=0");
	        	}
	    	}	
	    });
	});
	
	// [RA-602] CS - trim the text inside anchor tags that contain only whitespace, to prevent an underline from displaying
	$('#main-content a:not([href]), #main-content a:not([href]) > span').each(function() {
		if(jQuery.trim($(this).text()).length == 0) { 
			$(this).text("");
		}
	});	

	// RA-600: Design options to resolve theme search icon display in tablet view
	if ($(window).width() >= 768 && isTouchDevice()) {
		$('.homepage-tile .tile-search').addClass('touchable');
	}
	
	// RA-682 - Cleanup code for accordion widget - hide the empty p tags that CKEditor automatically adds to the end of accordion containers
	$('.accordion-container > p').each(function() {                
		if($(this).html() == '&nbsp;' && $(this).is(':last-child')) {
			$(this).hide();
		}
	});	
	
});

/*
 * Utility function used to detect if the user device's touchable device.
 * Any touchable devices that support mouse are not considered as touch device by this function.
 */
function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
			|| (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

/**
 * readCookie
 * 
 * @param cookieName
 * @returns cookieValue
 */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
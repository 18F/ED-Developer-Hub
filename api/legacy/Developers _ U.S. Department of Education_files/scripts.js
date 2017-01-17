jQuery(document).ready(function() {
	jQuery(document).on( "click", ".form-item-override-title", function() {
		if (jQuery('#override-title-checkbox').is(':checked')) {
			jQuery('#override-title-textfield').removeAttr('disabled');
		}
	});
});
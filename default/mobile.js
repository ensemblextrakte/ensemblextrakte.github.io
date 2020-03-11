jQuery(document).ready(function() 
{
    //Open the menu
    jQuery("#nav-toggle").click(function() 
	{
		$("#nav-toggle").addClass('active');
		
		$( "#index" ).animate({ left: "0" }, 150);
		//display a layer to disable clicking and scrolling on the content while menu is shown
		jQuery('#closing_layer').css({'left' : '260px'});
		
		// fadeIn?
		setTimeout( function() { jQuery('#closing_layer').css('display', 'block'); }, 100 );
        //jQuery('#closing_layer').css('display', 'block');
		
		//disable all scrolling on mobile devices while menu is shown
		jQuery('#exhibit').bind('touchmove', function(e){ e.preventDefault()} );
    });

    //close the menu
    jQuery("#closing_layer").click(function() 
	{
		$("#nav-toggle").removeClass('active');
		
        //enable all scrolling on mobile devices when menu is closed
        jQuery('#exhibit').unbind('touchmove');
		$( "#index" ).animate({ left: "-265" }, 150);
		jQuery('#closing_layer').css('display', 'none');
    });
});
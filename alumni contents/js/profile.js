(function(){


	$(document).ready(function(){
		// When the user clicks on the button, open the modal 
$('#profile .overlay-container').on('click',function(){
    $('#myModal').show("1000");
});

$('#login-button').on('click',function(e){
	e.preventDefault();
    $('#login-form').show("1000");
});

// When the user clicks on <span> (x), close the modal
$('.modal-content span.close').on('click',function(){
    $('.modal').hide("1000");
});
$(window).on('click',function(event){ 
	var modal = $('#myModal')[0];
    if (event.target == modal) {
        $('.modal').hide("1000");
    }
});

/*$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
      //  var activeTab = $(e.target).text(); // Get the name of active tab
        $(e.relatedTarget).tab('hide'); // Get the name of previous tab
        
    });*/

     $("#profile-menu li a").click(function(e){
    	e.preventDefault();
    	var actived_nav = $('#profile-menu > li.activ');
		
    	var active_tab_selector = $('#profile-menu > li.activ > a').attr('href');
    	actived_nav.removeClass('activ');
    	$(active_tab_selector).addClass('hide');
         
    	var target_tab_selector = $(this).attr('href');
    	$(this).parents('li').addClass('activ');
		$(target_tab_selector).removeClass('hide');
    	$(this).tab('show');
    });
	});
})();
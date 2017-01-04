(function(){
$(document).ready(function(){
	$('div.fieldset-input_group input').focus(function() {
    	 $(this).css({
      'border-left-width':'45px',
      'transition': 'all 0.2s ease-in'
    });
    var ele=$(this).parent();
    var ele1=$(ele).find('span.input-addon');
    $(ele1).css({'display':'block',
                  'transition':'all 0.2s ease-in'});
}).blur(function(){
    $(this).css({
      'border-left-width':'0',
      'transition': 'all 0.2s ease-in'
    });
    var ele=$(this).parent();
    var ele1=$(ele).find('span.input-addon');
    $(ele1).css({'display':'none',
                  'transition':'all 0.2s ease-in'});
});

$('div.mobile_input input').focus(function(){
	var ele=$(this).parent();
    var ele1=$(ele).find('span.input-addon');
    if($(this).val()!='')
    $(ele1).css({'color':'#fff'});
    

}).blur(function() {
   
    var ele=$(this).parent();
    var ele1=$(ele).find('span.input-addon');
    if($(this).val()==''){
    $(ele1).css({'display':'none',
    	           'border-left-color':'rgb(255,143,0)',
    				'color':'#fff',
                  'transition':'all 0.2s ease-in'});
}
else{
	$(this).css({
		 'border-left-width':'45px',
      
      'transition': 'all 0.2s ease-in'
    });
	 $(ele1).css({'display':'block',
	 	           'border-left-color':'#e4e4e4',
	 	           'color':'#555',
                  'transition':'all 0.2s ease-in'});
}

});

$('div.phone_input input#phone-number').focus(function(){
	var ele=$(this).parent();
    var ele1=$(ele).find('span.input-addon');
    $(ele1).css({'display':'none'});
    });

var current_fs,previous_fs,next_fs,animating;
$('.next').on('click',function(e){
	e.preventDefault();
	if(animating) return false;
	animating = true;
 current_fs=$(this).parent().parent();
 var bad=0,flag=0;
 next_fs=$(this).parent().parent().next();
 var current_fs_no=$('#progress li').eq($('fieldset').index(current_fs)).index();
var current_fs_all=$(current_fs).find('*');
 $(current_fs_all).filter(':input').not('button').each(function(){ 
 	    /*if($(this).is(':radio')){
 	       if(!($(this).is(':checked')))
 	    		{
 	    				bad++;
 	    				flag=1;
 	    		}
 	    		else if(flag==1)
 	    			bad--;

 	   }*/

 	   if($(this).is(':radio')){
 var radio_name=$(current_fs_all).filter('input[type="radio"]').attr('name');
 if (!$("input[name="+radio_name+"]:checked").val()) {
       bad++;
   }
}
 	    
        if( $.trim($(this).val()) == "") bad++; 
       
                   
    });

  



  if(bad>0){
  	
  	$('#progress li').eq($('fieldset').index(current_fs)).addClass('danger');
  }
  else{
  	
  	 $('#progress li').eq($('fieldset').index(current_fs)).addClass('success');
  }

 $('#progress li').eq($('fieldset').index(next_fs)).addClass('active');
$(current_fs).fadeOut(200);
setTimeout(function(){
  $(next_fs).fadeIn(200);
  animating=false;
},200);
 


});


$('.previous').on('click',function(e){
	e.preventDefault();
	if(animating) return false;
	animating = true;
 current_fs=$(this).parent().parent();
 var bad=0,flag=0;
 previous_fs=$(this).parent().parent().prev();
/* var current_fs_no=$('#progress li').eq($('fieldset').index(current_fs)).index();*/
var current_fs_all=$(current_fs).find('*');
 
  $('#progress li').eq($('fieldset').index(current_fs)).removeClass('active');
  	$('#progress li').eq($('fieldset').index(previous_fs)).removeClass('danger');
  	 $('#progress li').eq($('fieldset').index(previous_fs)).removeClass('success');
  	 $('#progress li').eq($('fieldset').index(previous_fs)).addClass('active');
  


$(current_fs).fadeOut(200);
setTimeout(function(){
  $(previous_fs).fadeIn(200);
  animating=false;
},200);



});

/* Year pickup for admission and passout year */
var time=new Date();
  var year=time.getFullYear();
  //alert(year);
  var first_year=year-27;
  var last_year=year+30;
  do{
  var ele=$('<option value="'+first_year+'">'+first_year+'</option>');
    $('#adm_year').append(ele);
    var ele1=$('<option value="'+first_year+'">'+first_year+'</option>');
    $('#pass_year').append(ele1);
    first_year++;
  }while(first_year<=last_year);

});
})();
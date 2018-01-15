(function(){
	


/*jquery starts here */

/*$(document).ready(function(){
  $(window).scroll(function() {
  	/* Act on the event */
  	// var outer=$('#home').height();
  	/* if($(document).scrollTop()>=200){
  	 	$('#topnav').addClass('scrolled');
  	 	$('#logo').removeClass('hide');
  	 }
  	 else{
  	 	$('#topnav').removeClass('scrolled');
  	 	$('#logo').addClass('hide');
}
  }).trigger('scroll');*/

$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval: false
    });

   $(document).bind('keyup', function(e) {
        if(e.which == 40){
            $('.carousel').carousel('next');
        }
        else if(e.which == 38){
            $('.carousel').carousel('prev');
        }
    });

// scroll slides on mouse scroll 
$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
           
        }
        else{
            $(this).carousel('next');
      
        }
    });

//scroll slides on swipe for touch enabled devices 

  $("#myCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
      $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    
 $('#topnav li a').click(function(){
        $('#topnav li a.active').removeClass('active');
        $(this).addClass('active');
    });





  $('#search input').focus(function() {
    $('#search .input-group-addon').css({
      'border-bottom': '2px solid #cf7d14',
      'transition': 'all 0.3s ease-in'
    });
    $('#search .input-group-addon i').css({
      'color': '#cf7d14',
      'transition': 'all 0.3s ease-in'
    });
}).blur(function() {
    $('#search .input-group-addon').css({
      'border-bottom': '2px solid #989898',
      'transition': 'all 0.3s ease-in'
    });
     $('#search .input-group-addon i').css({
      'color': '#989898',
      'transition': 'all 0.3s ease-in'
    });
});

$('div.input_group input').focus(function() {
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






    

$('#search div.search_div').hover(function(e){
       //var class=$(this).className('display_name');
       var cl=$(this).find('p.display_name');
       $(cl).fadeOut(200);
       var cl2=$(this).find('div.over_lay_text');
       $(cl2).fadeIn(300);
       e.preventDefault();
},function(e){
  var cl2=$(this).find('div.over_lay_text');
       $(cl2).fadeOut(200);
  var cl=$(this).find('p.display_name');
       $(cl).fadeIn(300);
       
e.preventDefault();
}
);
  var document_width=$(window).width();
  $('.navbar-toggle').click(function(){
   
    //document.getElementById("navigation").style.width = "250px";
   // document.getElementById("home").style.marginRight = "250px";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    //$('#navigation').addClass('small');
     $("#navigation").removeClass('very_small');
    $("#navigation").addClass('small_width');
    //$("body").addClass('margin-right');
    //$('body').css('backgroundColor','rgba(0,0,0,0.6)');
  });
  $('#navigation .closebtn').click(function(){
    $("#navigation").removeClass('small_width');
     //$("body").removeClass('margin-right');
       $("#navigation").addClass('very_small');
       
  });

  var time=new Date();
  var year=time.getFullYear();
  //alert(year);
  var first_year=year-27;
  var last_year=year+30;
  do{
  var ele=$('<option value="'+first_year+'">'+first_year+'</option>');
    $('#year').append(ele);
    first_year++;
  }while(first_year<=last_year);

/*else{
  var new_width=$(window).width();
  $("#navigation").width(new_width);
}*/
$(window).on("resize", function() {
    if ($(window).width() > 991) {
     
      $('#navigation').removeClass('small_width');
      $('#navigation').removeClass('very_small');
    }
  });

 var winheight = $(window).height();

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (winTop > (pos-(winheight*.75))) {
      $(this).addClass("slide");
    }
  });
});
});
/* Navigation bar scrolling */
  $('#nav a[href=#]').click(function() {
    return false;
  });
  
 /* $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });*/

  $(".navbar a, footer a[href='#myPage'], a.btn").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;   
        $("#navigation").addClass('very_small');
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
      });
    }
  });

})();
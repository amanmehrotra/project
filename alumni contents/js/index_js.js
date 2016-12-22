(function(){
	
                
	$("#home").vegas({
		delay:4000,
		timer:false,
    slides: [
     { src: "img/Banaras-Hindu-University.jpg" },
        { src: "img/morning.jpg" },
        { src: "img/morningsecond.jpg" },
       
        
        { src: "img/Varanasi.jpg"},
        { src: "new_img/pic2.jpg"},
        { src: "new_img/pic7.jpg"}
         
    ],
      animation: 'kenburns'  ,
      walk: function (index, slideSettings) {
      	  
      	 var text=["Computer Science and Application <br>Department of Computer Science,BHU","Lorem doler ipsum amet<br>Lorem doloer ipsum amet","Lorem doler ipsum amet<br> r u kidding me","Lorem doler ipsum amet<br> u r a prefect moron","lorem doler ipsum amet<br>whatsup bro."];
      	 if(index==text.length)
      	 	index=0;

      	 document.getElementById("main-text").innerHTML=text[index];
        }
});

/*jquery starts here */

$(document).ready(function(){
  $(window).scroll(function() {
  	/* Act on the event */
  	// var outer=$('#home').height();
  	 if($(document).scrollTop()>=200){
  	 	$('#topnav').addClass('scrolled');
  	 	$('#logo').removeClass('hide');
  	 }
  	 else{
  	 	$('#topnav').removeClass('scrolled');
  	 	$('#logo').addClass('hide');
}
  }).trigger('scroll');


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
        $("body").removeClass('margin-right');
  });


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

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

})();
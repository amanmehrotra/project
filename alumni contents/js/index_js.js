(function(){
	
                
	$("#home").vegas({
		delay:4000,
		timer:false,
    slides: [
     { src: "img/Banaras-Hindu-University.jpg" },
        { src: "img/morning.jpg" },
        { src: "img/morningsecond.jpg" },
       
        
        { src: "img/Varanasi.jpg"},
        { src: "img/IMG_2352.jpg"}
         
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
});

/* Navigation bar scrolling */
  $('#nav a[href=#]').click(function() {
    return false;
  });
  
  $('a[href*=#]').click(function() {
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
  });

})();
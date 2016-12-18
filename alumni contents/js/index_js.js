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
}).blur(function() {
    $('#search .input-group-addon').css({
      'border-bottom': '2px solid #989898',
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
$(document).ready(function() {

  
    //Preloader
  $(window).load(function() {
    $(".spinner").delay(1000).fadeOut('slow');
    $("#mask").delay(1500).slideUp(600);
  });
    

  //Header animation on scroll
  $(window).scroll(function() {
    var outer = $('#home').height();

    if ($(document).scrollTop() >= outer-2) {
      $('#topnav').addClass('scrolled');
    } else{
      $('#topnav').removeClass('scrolled');
    }
  }).trigger('scroll');

  $('#nav a[href=#]').click(function() {
    return false;
  });
    //Header animation on scroll in small devices
  $(window).scroll(function() {
  if ($(this).width() < 768){
    var outer = $('#home').height();

    if ($(document).scrollTop() >= outer-10) {
      $('#topnav').addClass('scrolled');
    } else{
      $('#topnav').removeClass('scrolled');
    }
 } }).trigger('scroll');

 //Header animation on scroll in small devices
  $(window).scroll(function() {
  if ($(this).width() < 360){
    var outer = $('#home').height();

    if ($(document).scrollTop() >= outer+320) {
      $('#topnav').addClass('scrolled');
    } else{
      $('#topnav').removeClass('scrolled');
    }
 } }).trigger('scroll');


  //Navigation Scrolling
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

  //Close navbar on click
  $('#nav a').on('click', function(){
    if ($(window).width() < 768) {
      $(".navbar-toggle").click();
    }
  });
  

  


  //Page title opacity on scroll
  $(window).on('scroll', function(){

    var fadeStart=  100;
    var fadeUntil=  '';

    if ($('#home').length) {
      fadeUntil = 450
    } else{
      fadeUntil = 200
    }

    var offset = $(document).scrollTop();
    var opacity=0;

    if(offset<=fadeStart){
      opacity=1;
    }
    else if( offset<=fadeUntil ){
      opacity=1-offset/fadeUntil;
    }

    $('.slide-middle, .title-text').css('opacity',opacity);

  });

  //Elements animation
  $('.animated').appear(function(){
    var element = $(this);
    var animation = element.data('animation');
    var animationDelay = element.data('animation-delay');
    if (animationDelay) {
      setTimeout(function(){
        element.addClass( animation + " visible" );          
      }, animationDelay);
    }else {
      element.addClass( animation + " visible" );        
    }    
  },{accY: -150});

  //Clients carousel
  $("#clients-carousel").owlCarousel({
    items : 4,
    itemsDesktop : [1000,4],
    itemsDesktopSmall : [900,3],
    itemsTablet: [600,2],
    itemsMobile : false,
    autoPlay: 4000,
    pagination: false
  });

  //Portfolio Filters
  $('#works-list').mixitup({
    effects: ['fade','scale'],
    easing: 'snap'
  });

  //Elements animation
  
    
        
  

});
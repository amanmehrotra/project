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
      	  
      	 var text=["Computer Science and Application <br>Department of Computer Science,BHU","Lorem doler ipsum amet","Lorem doler ipsum amet<br> lorem doler ipsum amet","Lorem doler ipsum amet<br> lorem doler ipsum amet<br>lorem doler ipsum amet"];
      	 if(index==text.length)
      	 	index=0;

      	 document.getElementById("main-text").innerHTML=text[index];
        }

    
      
});

})();
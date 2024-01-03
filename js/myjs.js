 $(document).ready(function() {
           
            $("#counting").animateNumbers(200, true, 2000);
            $("#counting-one").animateNumbers(50, true, 2000);
            $("#counting-two").animateNumbers(500, true, 10000);
            $("#counting-three").animateNumbers(25, true, 2000);
            
        });
		
$(document).ready(function() {
          $(window).scroll(function(){
			  var scroll = $(window).scrollTop();
			  
			  if(scroll>300){
				  $(".navbar-area").css("background"," rgba(0,0,0,.8)");
			  }
			  else{
				$(".navbar-area").css("background","");
			  }
             });
        });
		
	 //typing  script
	
	 
	 var typed = new Typed(".typing",{
		 String:("web designer"),
		 typeSpeed:100,
		 backSpeed:60,
		 loop:true
	 });

 var typed = new Typed(".typing-one",{
		 String:(""),
		 typeSpeed:100,
		 backSpeed:60,
		 loop:true
	 });


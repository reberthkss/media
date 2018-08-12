$(document).ready(function() {
   $(".gnbBtn").toggle(function() {
	 $("#gnb").slideDown('slow');
   }, function() {
	 $("#gnb").slideUp('fast');
   });
   
   
    var current=0;
    
   $(window).resize(function(){ 
      var screenSize = $(window).width(); 
        $("#gnb").hide();
       
      if( screenSize > 785){
        $("#gnb").show();
		 current=1;
      }
      if(current==1 && screenSize < 785){
        $("#gnb").hide();
         current=0;
      }
    }); 
    
  });
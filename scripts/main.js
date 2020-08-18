// NAV BAR SCROLL
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 15) {
          $(".top-nav").css("background" , "white");
        }
        else{
            $(".top-nav").css("background" , "transparent");  	
        }
    })
  })
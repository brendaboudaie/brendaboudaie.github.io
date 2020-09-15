// NAV BAR SCROLL
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 15) {
          $(".top-nav").css("background" , "white");
          $(".top-nav").css("box-shadow" , "0px 4px 10px 0px rgba(0,0,0,0.30)");
        }
        else{
            $(".top-nav").css("background" , "transparent");  
            $(".top-nav").css("box-shadow" , "none");
        }
    })
  })
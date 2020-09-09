// NAV BAR SCROLL
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 15) {
          $(".top-nav").css("background" , "white");
          $(".logoname").css("display", "none");
          $(".logo-img").css("display", "block");
        }
        else{
            $(".top-nav").css("background" , "transparent");  	
            $(".logoname").css("display", "block");
            $(".logo-img").css("display", "none");
        }
    })
  })
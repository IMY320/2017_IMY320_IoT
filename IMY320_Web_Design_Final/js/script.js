var home_page;
var one_page;
var two_page;
var three_page;
var footer_page;
var home_check = true;
var one_check = false;
var two_check = false;
var three_check = false;
var footer_check = false;
var offset_value = 100;
$(document).ready(function(){  
	$("#gall").click(function()	{
		$(".gallery").fadeIn(1000);		
    });
    $(".thumbnail").click(function(){		
		var val = $(this).attr("id");
		if(val == "#1")
			$("#rev").attr("src" , "images/img1.jpg");
		else if(val == "#2")
			$("#rev").attr("src" , "images/img2.jpg");
		else if(val == "#3")
			$("#rev").attr("src" , "images/img3.jpg");
		else if(val == "#4")
			$("#rev").attr("src" , "images/img4.jpg");	
    });	    
    $("#cs").click(function() { 
        $(".gallery").fadeOut(1000);
    });	
    home_page = $('.home-page').offset().top;
    one_page = $('.one-page').offset().top;
    two_page = $('.two-page').offset().top;
    three_page = $('.three-page').offset().top;
    footer_page = $('.footer-page').offset().top; 
    console.log("Screen Top: " + $(window).scrollTop());
    console.log("Home: " + home_page);
    console.log("One: " + one_page);
    console.log("Two: " + two_page);
    console.log("Three: " + three_page);
    console.log("Footer: " + footer_page); 
    $(".down").attr("disabled",false);
    $(".up").attr("disabled",false);      
    $(".topnav a").on('click', function(event) {
        if (!$(this).hasClass("gall")) {
            $(".gallery").fadeOut(500);
        }       
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-65
            }, 500, function() {
                //window.location.hash = hash-60;
            });
        }
    });
    $(".down").on('click', function(event) {
        if (!$(".down").attr("disabled"))  {          
            event.preventDefault();
            $(".down").attr("disabled",true);
            $('html, body').animate({
                scrollTop: $(window).scrollTop()+$(window).height(),
            }, 500, function() {
                $(window).scrollTop($(window).scrollTop());
                $(".down").attr("disabled",false);                
            });
        }            
    });
    $(".up").on('click', function(event) {
        if (!$(".up").attr("disabled"))  {          
            event.preventDefault();
            $(".up").attr("disabled",true);
            $('html, body').animate({
                scrollTop: $(window).scrollTop()-$(window).height()
            }, 500, function() {
                $(window).scrollTop($(window).scrollTop());
                $(".up").attr("disabled",false);                
            });
        }            
    }); 
    $(".topnav a").on('click', function(event) {
        if($(this).parent().hasClass("responsive")){
            if(!$(this).hasClass("icon")){
                $(".top-nav").removeClass("responsive");
            }
        }   
    });   
});
$(window).resize(function() {
    if($(window).width() > 583) {  
        $(".top-nav").removeClass("responsive");
    }
    home_page = $('.home-page').offset().top;
    one_page = $('.one-page').offset().top;
    two_page = $('.two-page').offset().top;
    three_page = $('.three-page').offset().top;
    footer_page = $('.footer-page').offset().top; 
    console.log("Home: " + home_page);
    console.log("One: " + one_page);
    console.log("Two: " + two_page);
    console.log("three: " + three_page);
    console.log("Footer: " + footer_page);
});
/*$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        alert("Stopped scrolling! 1");
    }, 250));
});
$(window).scroll(function(){ 

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        if ($(window).scrollTop() == 0){
            $(".up").css({"visibility":"hidden"});
            $(".down").css({"visibility":"visible"});            
        }
        else if ($(window).scrollTop() >= $(document).height()-$(window).height()){
            $(".down").css({"visibility":"hidden"});
            $(".up").css({"visibility":"visible"});
        }
        else {
            $(".up").css({"visibility":"visible"});
            $(".down").css({"visibility":"visible"});
        }       
        console.log("Screen Top: " + $(this).scrollTop());
        if ($(this).scrollTop() >= home_page - offset_value &&  $(this).scrollTop() <= home_page + offset_value){
            console.log("Home: " + home_page);
            $(window).scrollTop(home_page);
        }
        if ($(this).scrollTop() >= one_page - offset_value &&  $(this).scrollTop() <= one_page + offset_value){
            console.log("Services: " + one_page);
            $(window).scrollTop(one_page);
        }
        if ($(this).scrollTop() >= two_page - offset_value &&  $(this).scrollTop() <= two_page + offset_value){
            console.log("Services: " + two_page);
            $(window).scrollTop(two_page);
        }
        if ($(this).scrollTop() >= three_page - offset_value &&  $(this).scrollTop() <= three_page + offset_value){
            console.log("Services: " + three_page);
            $(window).scrollTop(three_page);
        }
        if ($(this).scrollTop() >= footer_page - offset_value &&  $(this).scrollTop() <= footer_page + offset_value){
            console.log("Services: " + footer_page);
            $(window).scrollTop(footer_page);
        }
        if ($(this).scrollTop() >= home_page && $(this).scrollTop() < one_page-($(this).height()/2) && home_check == false){
            home_check = true;
            one_check = false;
            two_check = false;
            three_check = false;
            four_check = false;
            footer_check = false;
            console.log("home");
            var $nav_line = $(".home-page-nav span");
            $(".topnav a").css("color", "rgba(255,255,255,0.5)");
            $(".home-page-nav").css("color", "rgba(255,255,255,1)");
            if ($(".nav-indicator-active")[0]){
                $(".nav-indicator-active").animate({
                    opacity: 0,        
                }, 250, function() {
                    // Animation complete.
                    $(".nav-indicator-active").removeClass();
                    $nav_line.addClass("nav-indicator-active");
                    $(".nav-indicator-active").animate({
                        opacity: 1,        
                    }, 250, function() {
                        
                    });
                });
            } else {
                $nav_line.addClass("nav-indicator-active");
                $(".nav-indicator-active").animate({
                    opacity: 1,        
                }, 250, function() {});            
            }
            
        }
        if ($(this).scrollTop() >= one_page-($(this).height()/2) && $(this).scrollTop() < two_page-($(this).height()/2) && one_check == false){
            home_check = false;
            one_check = true;
            two_check = false;
            three_check = false;
            four_check = false;
            footer_check = false;
            console.log("one");
            var $nav_line = $(".one-page-nav span");
            $(".topnav a").css("color", "rgba(255,255,255,0.5)");
            $(".one-page-nav").css("color", "rgba(255,255,255,1)");
            if ($(".nav-indicator-active")[0]){
                $(".nav-indicator-active").animate({
                    opacity: 0,        
                }, 250, function() {
                    // Animation complete.
                    $(".nav-indicator-active").removeClass();
                    $nav_line.addClass("nav-indicator-active");
                    $(".nav-indicator-active").animate({
                        opacity: 1,        
                    }, 250, function() {
                        
                    });
                });
            } else {
                $nav_line.addClass("nav-indicator-active");
                $(".nav-indicator-active").animate({
                    opacity: 1,        
                }, 250, function() {});            
            }
        }
        if ($(this).scrollTop() >= two_page-($(this).height()/2) && $(this).scrollTop() < three_page-($(this).height()/2) && two_check == false){
            home_check = false;
            one_check = false;
            two_check = true;
            three_check = false;
            four_check = false;
            footer_check = false;
            console.log("two");
            var $nav_line = $(".two-page-nav span");
            $(".topnav a").css("color", "rgba(255,255,255,0.5)");
            $(".two-page-nav").css("color", "rgba(255,255,255,1)");
            if ($(".nav-indicator-active")[0]){
                $(".nav-indicator-active").animate({
                    opacity: 0,        
                }, 250, function() {
                    // Animation complete.
                    $(".nav-indicator-active").removeClass();
                    $nav_line.addClass("nav-indicator-active");
                    $(".nav-indicator-active").animate({
                        opacity: 1,        
                    }, 250, function() {
                        
                    });
                });
            } else {
                $nav_line.addClass("nav-indicator-active");
                $(".nav-indicator-active").animate({
                    opacity: 1,        
                }, 250, function() {});            
            }
        }
        if ($(this).scrollTop() >= three_page-($(this).height()/2) && $(this).scrollTop() < footer_page-($(this).height()/2) && three_check == false){
            home_check = false;
            one_check = false;
            two_check = false;
            three_check = true;
            four_check = false;
            footer_check = false;
            console.log("three");
            var $nav_line = $(".three-page-nav span");
            $(".topnav a").css("color", "rgba(255,255,255,0.5)");
            $(".three-page-nav").css("color", "rgba(255,255,255,1)");
            if ($(".nav-indicator-active")[0]){
                $(".nav-indicator-active").animate({
                    opacity: 0,        
                }, 250, function() {
                    // Animation complete.
                    $(".nav-indicator-active").removeClass();
                    $nav_line.addClass("nav-indicator-active");
                    $(".nav-indicator-active").animate({
                        opacity: 1,        
                    }, 250, function() {
                        
                    });
                });
            } else {
                $nav_line.addClass("nav-indicator-active");
                $(".nav-indicator-active").animate({
                    opacity: 1,        
                }, 250, function() {});            
            }
        }
        if ($(this).scrollTop() >= footer_page-($(this).height()/2) && footer_check == false){
            home_check = false;
            one_check = false;
            two_check = false;
            three_check = false;
            four_check = false;
            footer_check = true;
            console.log("footer");
            var $nav_line = $(".footer-page-nav span");
            $(".topnav a").css("color", "rgba(255,255,255,0.5)");
            $(".footer-page-nav").css("color", "rgba(255,255,255,1)");
            if ($(".nav-indicator-active")[0]){
                $(".nav-indicator-active").animate({
                    opacity: 0,        
                }, 250, function() {
                    // Animation complete.
                    $(".nav-indicator-active").removeClass();
                    $nav_line.addClass("nav-indicator-active");
                    $(".nav-indicator-active").animate({
                        opacity: 1,        
                    }, 250, function() {
                        
                    });
                });
            } else {
                $nav_line.addClass("nav-indicator-active");
                $(".nav-indicator-active").animate({
                    opacity: 1,        
                }, 250, function() {});            
            }
        }  
    }, 50));          
});*/
function myFunction() {           
    if (!$(".top-nav").hasClass("responsive")) {
        $(".top-nav").addClass("responsive");
    } else {
        $(".top-nav").removeClass("responsive");
    }
}
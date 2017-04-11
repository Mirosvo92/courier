$(document).ready(function() {
    //for open mobile menu
    var $hiddMenu = $('.hidd-menu'),
		$hiddMenuUl = $('.hidd-menu__ul'),
		$hiddMenuText = $('.hidd-menu__text');
	
	$hiddMenu .click(function(){
        if ($hiddMenuText.text() === "ЗАКРЫТЬ МЕНЮ") {
				$hiddMenuUl.slideUp(1000);
				$("body").removeClass("scroll-hidden");
				$hiddMenuText.text("Открыть меню");
			
			}else{   			
				$hiddMenuUl.css("display", "block").hide().slideDown(1000);
				$("body").addClass("scroll-hidden");
				$hiddMenuText.text("ЗАКРЫТЬ МЕНЮ");
		}
	});
    //stick
    var $forStick = $('.for-stick');
	
    $forStick.sticky({ topSpacing: 0 , zIndex: 99999});
		//when start stick
	$forStick.on('sticky-start', function() { 
     	$('.menu').css({
     		"backgroundColor": "#84bfce",
     		"width": "100%"
		});
		
     	$('.menu__ul').css({
     		"display": "flex",
			"justify-content" : "space-around"
		});
		
     	$('#dell-cont').removeClass("container");	
	});
		//when finish stick
	$forStick.on('sticky-end', function() { 
		
     	$('.menu').css({
     		"backgroundColor": "transparent",
     		"width": "100%"
		});
		
     	$('#dell-cont').addClass("container");	
	});
	
    //Chrome Smooth Scroll
    try {
		$.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
		}
		} catch(err) {
	};
    //anim
    var $arows =  $('.arrow2, .arrow, .arrow-two, .arrow2-two');
	
   	$arows.animated("rotateIn", "fadeOutDown");
    $('.description-serv').animated("fadeInDown", "fadeInUp");
    $('.social').animated("swing", "fadeInDown");
    //modal window
	$(".hidd_authoriz__button").on("click", function(e) {

        e.preventDefault();
		
		$(".main-form__modal-wr").css("display", "flex").hide().slideDown(500);		
	});
	
    $(".modal-wr__window-close").on("click", function() {
		
        $(".main-form__modal-wr").css("display", "none").hide().slideUp(500);
	});
	
});
//reloder
$(window).load(function() { 
    $(".loader_inner").fadeOut(); 
    $(".loader").delay(400).fadeOut("slow"); 
});
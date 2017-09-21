$(document).on("mousemove","header p i",function(){
	$(this).addClass("cur").siblings("i").removeClass("cur");
})


$(document).on("mousemove",".p_centont span",function(){
	$(this).addClass("cur").siblings("span").removeClass("cur");
})


$(document).on("mousemove",".train .classify p",function(){
	$(this).css("background","#0171ab").siblings("p").css("background","0");
})
$(document).on("mousemove",".train .classify p",function(){
	$(this).addClass("cur").siblings("p").removeClass("cur");
	$(".train .tips").eq($(this).index()).show().siblings(".train .tips").hide();
})
$(document).on("mouseleave",".train .classify p",function(){
	$(".train .tips").eq($(this).index()).hide();
})
$(document).on("mousemove",".content .shool .shool_one li",function(){
	$(this).addClass("cur").siblings("li").removeClass("cur");
})

$(document).on("mousemove",".employmen .hot .issues",function(){
	$(this).addClass("cur").siblings(".issues").removeClass("cur");
})
$(document).on("mousemove",".title .trends i",function(){
	$(this).addClass("cur").siblings("i").removeClass("cur");
})


//$(document).on("mouseenter",".content .wages li",function(){
//	$(this).stop().animate({bottom:'10px'});
//})
$(document).on("mouseenter",".content .wages li",function(){
	$(this).stop().animate({bottom:'10px'});
})
$(document).on("mouseleave",".content .wages li",function(){
	$('.content .wages li').stop().animate({bottom:'0'});
})

$(document).on("mouseenter",".course ul li",function(){
	$(this).stop().animate({bottom:'10px'});
})
$(document).on("mouseleave",".course ul li",function(){
	$('.course ul li').stop().animate({bottom:'0'});
})

$(document).on("mouseenter",".teacher li",function(){
	$(this).stop().animate({bottom:'10px'});
})
$(document).on("mouseleave",".teacher li",function(){
	$('.teacher li').stop().animate({bottom:'0'});
})

$(document).on("mouseenter",".videos .video li",function(){
	$(this).stop().animate({bottom:'10px'});
})
$(document).on("mouseleave",".videos .video li",function(){
	$('.videos .video li').stop().animate({bottom:'0'});
})

$(document).on("mouseenter",".ambient ul li",function(){
	$(this).stop().animate({bottom:'10px'});
})
$(document).on("mouseleave",".ambient ul li",function(){
	$('.ambient ul li').stop().animate({bottom:'0'});
})


$(document).on("mouseenter",".partner ul li",function(){
	$(this).stop().animate({bottom:'10px'});
})
$(document).on("mouseleave",".partner ul li",function(){
	$('.partner ul li').stop().animate({bottom:'0'});
})

$(document).on("mouseenter",".system dl dt",function(){
	$('.system dl dt').css("color","white")
	$(this).css("color","#0171AB");
})
$(document).on("mouseenter",".system dl dd",function(){
	$('.system dl dd').css("color","white")
	$(this).css("color","#0171AB");
})







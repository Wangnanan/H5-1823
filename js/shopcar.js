//我的地址
$("a").mouseenter(function(){
	$(this).css("text-decoration","none");
 })
$(".left>li").find("a").mouseenter(function(){
	$(this).css("color","#ff6000");
}).mouseleave(function(){
	$(this).css("color","");
})
$(".right>li").find("a").mouseenter(function(){
	$(this).css("color","#ff6000");
}).mouseleave(function(){
	$(this).css("color","");
})
$(".left").find("li").eq(1).mouseenter(function(){
	$(".inset").css("background","#fff");
	$(".inset").show();
}).mouseleave(function(){
	$(".inset").hide();
})
$(".inset").find("a").mouseenter(function(){
	$(this).css("background","#ff6000");
}).mouseleave(function(){
	$(this).css("background","");
}).click(function(){
	$(".lc").html($(this).html());
})
$(".inset").mouseleave(function(){
	$(this).hide();
})   
//我的订单
$(".ec1").mouseenter(function(){
	$(".order").css("background","#fff");
	$(".order").show();
}).mouseleave(function(){
	$(".order").hide();
})
$(".order").find("li").mouseenter(function(){
	$(this).find("a").css("color","skyblue");
}).mouseleave(function(){
	$(this).find("a").css("color","");
})
//我的收藏
$(".cl").mouseenter(function(){
	$(".collect").show();
}).mouseleave(function(){
	$(".collect").hide();
})
//手机
$(".pho").mouseenter(function(){
	$(".img").show();
}).mouseleave(function(){
	$(".img").hide();
})

/* 购物车导航栏 */
$(".nav>ul").children("li").mouseenter(function(){
	$(this).css("color","#ff6000").siblings().css("color","");
	$(this).css("font-weight","bold").siblings().css("font-weight","100");
});
$(".qxx").find("em").mousedown(function(){
	$(".sh                opping").show(); 
   setTimeout(function(){
	  $(".shopping").hide();
   },500)
})


$("footer a").mouseenter(function(){
	$(this).css("color","red");
}).mouseleave(function(){
	$(this).css("color","#000");
})
$(".ft img").mouseenter(function(){
	$(this).animate({"margin-top":-10},250);
}).mouseleave(function(){
	$(this).animate({"margin-top":0},250);
})

$(".addr").find("span").click(function(){
	$(this).css("background","#fff").siblings().css("background","#f6f6f6");
})
$(".addr").find("a").mouseenter(function(){
	$(this).css({"background":"#fb6003","color":"#fff"});
}).mouseleave(function(){
	$(this).css({"background":"#fff","color":"#666666"});
}).click(function(){
	$(".nav>div").find("span").eq(0).html($(this).html());
})
$(".nav").find("div").mouseenter(function(){
	$(".addr").show();
}).mouseleave(function(){
	$(".addr").hide();
})
$(".addr").mouseleave(function(){
	$(this).hide();
})


/* 全选功能 */
$(".qx").click(function(){
	$(".ck").prop("checked",$(this).prop("checked"));
	jiesuan();
})
/* 结算功能 */
function jiesuan(){
	var count=0;
	var money=0;
	//遍历被选中的复选框
	$(".ck:checked").each(function(){
		count+=Number($(this).parent().parent().find(".shop-count").html())
		money+=parseInt($(this).parent().parent().find(".price").html());
		console.log($(this).parent().parent().find(".price"));
	})
	$(".count").html(count);
	$(".sum").html("￥"+money);	
}

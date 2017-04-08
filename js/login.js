$(function(){
	$(".ocon li").eq(0).show();
	$(".otit li").click(function(){
		$(this).addClass("select").siblings().removeClass("select");
		var index=$(this).index();
		$(".ocon li").eq(index).show().siblings().hide();
	})
})
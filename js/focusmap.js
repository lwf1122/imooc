$(function(){
	var num=$(".pic li").size();
	
	//手动
	$(".pic li").eq(0).show();
	$(".pg li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		i=index;
		$(".pic li").eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
	})
	
	//自动
	var i=0;
	var t=setInterval(moveR,2000);
	
	//向左函数
	function moveL(){
		i--;
		if(i==-1){
			i=num-1;
		}
		$(".pg li").eq(i).addClass("active").siblings().removeClass("active");
		$(".pic li").eq(i).fadeIn(600).siblings().fadeOut(600);
	}
	
	//向右函数
	function moveR(){
		i++;
		if(i==num){
			i=0;
		}
		$(".pg li").eq(i).addClass("active").siblings().removeClass("active");
		$(".pic li").eq(i).fadeIn(600).siblings().fadeOut(600);
	}
	
	//左右按钮
	$(".banner .prev").click(function(){
		moveL();
	});
	$(".banner .next").click(function(){
		moveR();
	});
	
	//定时器的开始与结束
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveR,2000);
	})
});
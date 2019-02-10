window.onload = function() {
	
	var url = window.location.href;
	var flag_login = url.indexOf("uname");
	var index_num = url.indexOf("=");
	var utxt = "";
	if(flag_login != -1){
		$(".loginNone").css("display","none");
		utxt = url.substr(index_num + 1,url.length);
		$(".loginShow:first").html(utxt);
		$(".loginShow:first").css("display","block");
		$(".loginShow:last").css("display","block");
	}
	
	$(".nav_bar .nav").find("ul").find("li").click(function(){
		if(flag_login != -1){
			location.href = "goods_list.html?uname="+utxt;
		}else{
			location.href = "goods_list.html"
		}
	})
	$(".nav_bar .nav").find("ul").find("li:first").click(function(){
		if(flag_login != -1){
			location.href = "index.html?uname="+utxt;
		}else{
			location.href = "index.html"
		}
	})
	
	
	$(".video_button").click(function() {
		$(this).css("display", "none");
		$(this).prev().css("display", "none").prev().css("display", "none");
		$("#video_1").css("display", "block");
		$("#video_1").trigger('play');
	})

	var productInfoTxt = "";
	$.ajax({
		type:"get",
		url:"data/product_info.json?time="+new Date().getTime(),
		datatype:"json",
		success:function(res){
			if(res){
				
				$.each(res,function(i){
					// console.log(res[i].productImg)
					productInfoTxt += "<li><a href=''>";
					productInfoTxt += "<div class='product-img'>";
					productInfoTxt += "<img src='img/"+ res[i].productImg +"' alt='' title=''>";
					productInfoTxt += "<div class='product-img-mask'></div></div>";
					productInfoTxt += "<div class='product-details'>";
					productInfoTxt += "<p class='product-name'>"+ res[i].productName +"</p>";
					productInfoTxt += "<p class='product-desc'>"+ res[i].productDesc +"</p>";
					productInfoTxt += "<div class='line'></div>";
					productInfoTxt += "<p class='product-price'>"+ res[i].productPrice +"</p></div></a></li>";
				})
				$(".product-info").html(productInfoTxt);
				$(".product-info").css("width",res.length * 242);
			}else{
				console.log("请求数据失败！");
			}
		}
		
	})

	// 商品轮播操作
	$(".prev").click(function(){
		if( !ElementIsInAnimated($(".product-info")) ){	
			var leftNum = $(".product-info").position().left;
			if(leftNum != 0){
				leftNum += 1210;
			}
			$(".product-info").animate({left: leftNum },500);
		}
	})
	$(".next").click(function(){
		var flagNum = parseInt( parseInt($(".product-info").css("width"))/1200 ) - 1;
		if( !ElementIsInAnimated($(".product-info")) ){
			var leftNum = $(".product-info").position().left;
			if( leftNum >= -flagNum*1210 ){
				leftNum -= 1210;
			}
			$(".product-info").animate({left: leftNum},500);
		}
	})
	// 判断当前动画是否在执行过程中
	function ElementIsInAnimated(obj) {
		return obj.is(":animated");
	}
		
					
					
			
			
				
				
				
				
			
		
}

window.onload = function(){
	
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
	
	
	var productListTxt = "";
	$.ajax({
		type:"get",
		url:"data/product_list.json?time="+new Date().getTime(),
		datatype:"json",
		success:function(res){
			if(res){
				$.each(res,function(i){
					productListTxt += "<dl><dt data=''></dt>";
					productListTxt += "<dd class='d_img'><img src='img/"+ res[i].productImg +"' ></dd>";
					productListTxt += "<dd class='d_tips'><span>欧洲</span><span>自营</span><span>new</span></dd>";
					productListTxt += "<dd class='d_desc'>"+ res[i].productDesc +"</dd>";
					productListTxt += "<dd class='d_price'><strong><i>"+ res[i].productPrice +"</i></strong> </dd>"
					productListTxt += "<dd class='function'><a href='' class='addCard'>加入购物车</a></dd></dl>";	
				})
				$(".product_box").html(productListTxt);
			}else{
				console.log("请求数据失败！");
			}
		}
		
	})
	
	
	
		
		
		
		
		
		
	
}
window.onload = function(){
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
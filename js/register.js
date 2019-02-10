window.onload = function(){
	
	
	var nameFlag = false;
	$("#uName").blur(function(){
		var txt = $(this).val();
		var reg = /^[a-zA-Z0-9_-]{4,16}$/;
		if(reg.test(txt)){
			nameFlag = true;
		}else{
			nameFlag = false;
			$("#uname_s").css("color","red");
		}
	})
	
	var passFlag = false;
	$("#uPassword").blur(function(){
		var txt = $(this).val();
		var reg = /^.{6,18}$/;
		if(reg.test(txt)){
			passFlag = true;
			$("#pass_s").html("OK");
		}else{
			passFlag = false;
			$("#pass_s").html("密码6到18位");
			$("#pass_s").css("color","red");
		}
	})
	
	var pass2Flag = false;
	$("#uPasswordTwo").blur(function(){
		var txt = $(this).val();
		if(txt == $("#uPassword").val()){
			pass2Flag = true;
			$("#pass_s2").html("OK");
		}else{
			pass2Flag = false;
			$("#pass_s2").html("两次密码不一致");
			$("#pass_s2").css("color","red");
		}
	})
	
	// 注册验证
	$("#register_btn").click(function(){
		if( nameFlag &&  pass2Flag && passFlag ){
			registerUser();
			alert("注册成功");
		}
	})
	
	
	
	function registerUser(){
		var name = $("#uName").val();
		var pass = $("#uPassword").val();
		setCookieUtil(name,pass);
	}
	
	
	var login_uname_flag = false;
	$("#login_uName").blur(function(){
		var txt = $(this).val();
		var reg = /^[a-zA-Z0-9_-]{4,16}$/;
		if(reg.test(txt)){
			login_uname_flag = true;
		}else{
			login_uname_flag = false;
			$("#l_uname_s").css("color","red");
		}
	})
	
	var login_pass_flag = false;
	$("#login_uPassword").blur(function(){
		var txt = $(this).val();
		var reg = /^.{6,18}$/;
		if(reg.test(txt)){
			login_pass_flag = true;
			$("#l_pass_s").html("OK");
		}else{
			login_pass_flag = false;
			$("#l_pass_s").html("密码6到18位");
			$("#l_pass_s").css("color","red");
		}
	})
	
	$("#login_btn").click(function(){
		
		if( login_uname_flag && login_pass_flag ){
			loginFlag();
		}
	})
	
	function loginFlag(){
		console.log(getCookieUtil($("#login_uName").val()));
		if(getCookieUtil($("#login_uName").val()) == $("#login_uPassword").val()){
			alert("登录成功!");
			location.href = "index.html?uname="+$("#login_uName").val();
		}else{
			alert("账号或者密码不存在");
		}
	}
	
	
}
function Login() {
	this.loginBtn = $("#login-btn");
	this.ipt = $("#login-ipt");
	this.phoneIcon = $("#phone-icon");
	this.phoneMsg = $("#phone-msg");
	this.pwd = $("#login-pwd");
	this.pwdIcon = $("#pwd-icon");
	this.pwdMsg = $("#pwd-msg");
	this.logoBtn = $("#logo");
	this.init();
}
$.extend(Login.prototype,{
	init: function() {
		this.phoneVali();//手机号验证
		this.pwdVali();//密码验证
		this.btnClick();//登录按钮点击事件
		this.logoClick();
	},
	phoneVali: function() {
		this.ipt.blur($.proxy(this.handPhoneVali,this));
	},
	handPhoneVali: function() {
		if(!this.ipt.val()) {
			this.phoneIcon.css("display","block");
			this.phoneMsg.css("display","block");
			this.ipt.addClass("error-ipt");
		} else {
			this.ipt.removeClass("error-ipt");
			this.phoneIcon.css("display","none");
			this.phoneMsg.css("display","none");
		}
	},
	pwdVali: function() {
		this.pwd.blur($.proxy(this.handPwdVali,this));
	},
	handPwdVali: function() {
		if(!this.pwd.val()) {
			this.pwd.addClass("error-ipt");
			this.pwdIcon.css("display","block");
			this.pwdMsg.css("display","block");
		} else {
			this.pwd.removeClass("error-ipt");
			this.pwdIcon.css("display","none");
			this.pwdMsg.css("display","none");
		}
	},
	btnClick: function() {
		this.loginBtn.click($.proxy(this.handClick,this));
	},
	handClick: function() {
		var phoneNum = this.ipt.val();
		var pwdVal = this.pwd.val();
		$.ajax({
			type: "post",
			url: "http://localhost/work/weipinhui/src/php/login.php",
			data: {
				phone: phoneNum,
				pwd: pwdVal
			},
			dataType: "json",
			success: $.proxy(this.handSuc,this)
		})
	},
	handSuc: function(data) {
		if(data.status == 1) {//根据后端返回数据判断是否登录成功，成功存储已登录信息，页面跳首页
			alert("登录成功");
			var obj = {
				"status": 1,
				"phone": this.ipt.val()
			};
			localStorage.setItem("loginStatus",JSON.stringify(obj));
			location.href = "http://localhost/work/weipinhui/src/html/index1.html";
		} else if(data.status == 0) {
			alert("用户名不存在");
		} else {
			alert("密码错误");
		}
	},
	logoClick: function() {
		this.logoBtn.click($.proxy(this.handLogo,this));
	},
	handLogo: function() {
		location.href = "http://localhost/work/weipinhui/src/html/index1.html";
	}
})
new Login();
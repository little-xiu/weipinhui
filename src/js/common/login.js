//判断用户是否登录
function IsLogin() {
	this.aBtn = $(".login-btn");
	this.exitBtn = $(".exit-btn");
	this.regBtn = $(".register-btn");
	this.init();
}
$.extend(IsLogin.prototype,{
	init: function() {
		if(localStorage.loginStatus) {//判断已登录
			var obj = JSON.parse(localStorage.loginStatus);
			this.regBtn.css("display","none");
			this.phoneNum = obj.phone;
			this.aBtn.text(this.phoneNum.substr(0,3) + "*****" + this.phoneNum.substr(10));
			this.exitBtn.css("display","block");
			this.aBtnClick();
			this.exitClick();
		}
	},
	aBtnClick: function() {
		this.aBtn.click($.proxy(this.handAbtn,this));
	},
	handAbtn: function() {
		location.href = "member.html";
	},
	exitClick: function() {
		this.exitBtn.click($.proxy(this.handExit,this));
	},
	handExit: function() {//点击退出按钮
		localStorage.removeItem("loginStatus");
		location.href = "login.html";
	}
});
new IsLogin();
//登录和注册按钮点击跳转登录页
function LoginBtn() {
	this.aBtn = $(".login-btn");
	this.aRegBtn = $(".register-btn");
	this.init();
}
$.extend(LoginBtn.prototype,{
	init: function() {
		this.btnClick();
		this.regClick();
	},
	btnClick: function() {//先判断是否登录，没登录跳登录页
		if(!localStorage.loginStatus) {
			this.aBtn.click($.proxy(this.handlClick,this));
		}
	},
	handlClick: function() {
		location.href = "login.html";
	},
	regClick: function() {
		this.aRegBtn.click($.proxy(this.handlRegClick,this));
	},
	handlRegClick: function() {
		location.href = "register.html";
	}
})
new LoginBtn();
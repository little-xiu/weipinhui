function RegisterV() {
	this.phoneIpt = $("#phone-ipt");
	this.pwdIpt = $("#pwd-ipt");
	this.phoneCode = $("#phone-code");
	this.phoneSmg = $("#phone-smg");
	this.codeSmg = $("#code-msg");
	this.pwdMsg = $("#pwd-msg");
	this.pwdRepeat = $("#pwd-repeat");
	this.pwdReMsg = $("#pwd2-msg");
	this.pwdIconRe = $("#pwd2-icon");
	this.phoneIcon = $("#phone-icon");
	this.codeIcon = $("#code-icon");
	this.pwdIcon = $("#pwd-icon");
	this.getCode = $("#get-code");
	this.strong = $("#strong-wrap");
	this.acceptTips = $(".accept-tips");
	this.acceptIpt = $(".accept-ipt");
	this.regBtn = $("#register-btn");
	this.init();
}
$.extend(RegisterV.prototype,{
	init: function() {
		this.phoneVali();
		this.newCode();
		this.codeVali();
		this.pwdVali();
		this.repeatVali();
		this.accept();
		this.regClick();
	},//手机号验证
	phoneVali: function() {
		this.phoneIpt.focus($.proxy(this.handPhoneFocus,this));
		this.phoneIpt.blur($.proxy(this.handPhoneBlur,this));
	},
	handPhoneFocus: function() {
		this.phoneIpt.removeClass("error-ipt");
		this.phoneIcon.css("display","none");
		this.phoneSmg.css("display","none");
	},
	handPhoneBlur: function() {
		var regPhone = /^1[345678]\d{9}$/;
		if(this.phoneIpt.val() == "") {
			this.phoneIpt.addClass("error-ipt");
			this.phoneIcon.css("display","block");
			this.phoneSmg.css("display","block");
			this.phoneSmg.text("手机号不能为空");
			this.flag1 = "false";
		}
		if(!regPhone.test(this.phoneIpt.val())) {
			this.phoneIpt.addClass("error-ipt");
			this.phoneIcon.css("display","block");
			this.phoneIcon.removeClass("success");
			this.phoneSmg.css("display","block");
			this.phoneSmg.text("请输入正确的手机号码");
			this.flag1 = "false";
		} else {
			this.phoneIcon.css("display","block");
			this.phoneIcon.addClass("success");
			this.getCode.addClass("success");
			this.flag1 = "true";
		}
	},//生成6位数随机验证码
	newCode: function() {
		this.getCode.click($.proxy(this.handNewCode,this));
	},
	handNewCode: function() {
		if(this.getCode.hasClass("success")) {
			this.getCode.text(new GetCode().create());
		}
	},//验证码输入验证
	codeVali: function() {
		this.phoneCode.blur($.proxy(this.handCodeVali,this));
		this.phoneCode.focus($.proxy(this.handCodeFocus,this));
	},
	handCodeVali: function() {
		var regCode = /^([0-9a-zA-Z]){6}$/;
		if(this.phoneCode.val() == "" || !regCode.test(this.phoneCode.val())) {
			this.phoneCode.addClass("error-ipt");
			this.codeIcon.css("display","block");
			this.codeSmg.css("display","block");
			this.codeSmg.text("请输入6位手机验证码");
			this.flag2 = "false";
		} else {
			this.codeIcon.css("display","block");
			this.codeIcon.addClass("success");
			this.flag2 = "true";
		}
	},
	handCodeFocus: function() {
		this.phoneCode.removeClass("error-ipt");
		this.codeIcon.css("display","none");
		this.codeSmg.css("display","none");
	},//验证密码 密码由6-20位字母，数字和符号组合
	pwdVali: function() {
		this.pwdIpt.focus($.proxy(this.handPwdFocus,this));
		this.pwdIpt.keyup($.proxy(this.handPwdKup,this));
		this.pwdIpt.blur($.proxy(this.handPwdBlur,this));
	},
	handPwdFocus: function() {
			this.pwdIpt.removeClass("error-ipt");
			this.pwdIcon.css("display","none");
			this.pwdMsg.css("display","none");
	},
	handPwdKup: function() {
		var reg = /(^[a-zA-Z]{6,20}$)|(^[0-9]{6,20}$)/;
		var reg2 = /^[a-zA-Z0-9]{6,20}$/;
		var reg3 = /^[a-z0-9_-]{6,20}$/;
		var val = this.pwdIpt.val();
		if(val.length < 6) {
			this.strong.removeClass("mid-wrap strong-wrap")
			this.strong.addClass("show");
			this.pwdMsg.css("display","inline-block");
			this.pwdMsg.text("请输入6-20位密码");
			//弱：纯字母或纯数字
		} else if (reg.test(val)) {
			this.pwdMsg.text("密码过于简单，有被盗风险，建议您更改为复杂密码");
			//中：数字与字母组合
		} else if(reg2.test(val)) {
			this.strong.addClass("mid-wrap");
			this.strong.removeClass("strong-wrap");
			this.pwdMsg.text("密码安全度适中");
			//强：除数字字母外还含其他不是特殊字符的字符,
		} else if (reg3.test(val) && val.length > 10) {
			this.strong.removeClass("mid-wrap");
			this.strong.addClass("strong-wrap");
			this.pwdMsg.text("你的密码很安全");
		}
	},
	handPwdBlur: function() {
		var val = this.pwdIpt.val();
		if(val.length < 6) {
			this.pwdIpt.addClass("error-ipt");
			this.strong.addClass("show");
			this.pwdIcon.css("display","block");
			this.flag3 = "false";
		} else {
			this.pwdIpt.removeClass("error-ipt");
			this.pwdIcon.css("display","block");
			this.pwdIcon.addClass("success");
			this.flag3 = "true";
		}
	},//重复密码验证
	repeatVali: function() {
		this.pwdRepeat.focus($.proxy(this.handReFocus,this));
		this.pwdRepeat.blur($.proxy(this.handReBlur,this));
	},
	handReFocus: function() {
		this.pwdReMsg.css("display","none");
		this.pwdIconRe.css("display","none");
		this.pwdRepeat.removeClass("error-ipt");
	},
	handReBlur: function() {
		var codeVal = this.pwdIpt.val();
		var val = this.pwdRepeat.val();
		if(codeVal != val) {
			this.pwdReMsg.css("display","block");
			this.pwdReMsg.text("两次输入的密码不一致，请重试");
			this.pwdIconRe.css("display","block");
			this.pwdIconRe.removeClass("success");
			this.pwdRepeat.addClass("error-ipt");
			this.flag4 = "false";
		} else {
			this.pwdIconRe.css("display","block");
			this.pwdIconRe.addClass("success");
			this.flag4 = "true";
		}
	},
	accept: function() {
		this.acceptIpt.click($.proxy(this.handAccept,this));
	},
	handAccept: function() {
		if(!this.acceptIpt.get(0).checked) {
			this.acceptTips.css("display","block");
			this.flag5 = "false";
		} else {
			this.acceptTips.css("display","none");
			this.flag5 = "true";
		}
	},//注册按钮点击
	regClick: function() {
		this.regBtn.click($.proxy(this.handRegClick,this));
	},
	handRegClick: function() {
		if(this.flag1 && this.flag2 && this.flag3 && this.flag4 && this.flag5) {
			var phoneNum = this.phoneIpt.val();
			var pwdVal = this.pwdIpt.val();
			$.ajax({
				type:"post",
				url: "http://localhost/work/weipinhui/src/php/register.php",
				dataType: "json",
				data: {
					phone:phoneNum,
					pwd: pwdVal
				},
				success: $.proxy(this.handAjax,this)
			});	
		}
	},
	handAjax: function(data) {
		if(data.status == 1) {
			alert('注册成功');
			location.href = "http://localhost/work/weipinhui/src/html/login.html";
		} else {
			alert('注册失败');
		}
	}
})
new RegisterV();

//封装函数：生成验证码
function GetCode() {
	this.init();
}
$.extend(GetCode.prototype,{
	init: function() {
		this.create();
	},
	numR: function (n,m) {
		return parseInt(n+Math.random()*(m-n+1));
	},
	create: function() {
		let arr = [];//存储0-9a-z
		let newArr = [];
		for(let k=48; k<=57; k++) {
			arr.push(String.fromCharCode(k))
		}
		for(let i = 97; i <= 122; i++) {
			arr.push(String.fromCharCode(i));
		}
		for(let j = 65; j<=90; j++) {
			arr.push(String.fromCharCode(j));
		}
		//取arr里的一个随机数字
		let numIndex = this.numR(0,9);
		newArr.push(arr[numIndex]);
		let charIndex = this.numR(10,arr.length-1);
		newArr.push(arr[charIndex]);
		for(let i=0; i<4; i++) {
			let anyIndex = this.numR(0,arr.length-1);
			newArr.push(arr[anyIndex]);
		}
		//数组混排
		let i = newArr.length;
	  while (i) {
	    let j = Math.floor(Math.random() * i--); //获取0-newArr.length-1的随机数
	    [newArr[j], newArr[i]] = [newArr[i], newArr[j]];
	  }
    return newArr.join("");	
	}
})


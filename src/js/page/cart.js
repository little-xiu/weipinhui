function ShowData() {
	this.cartList = $("#cart-inner");
	this.proNum = $(".pro-num");
	this.sumMoney = $(".sum-money");
	this.init();
}
$.extend(ShowData.prototype,{
	init: function() {
		this.requestData();
	},
	requestData: function() {
		$.ajax({
			type: "post",
			url: "../php/show.php",
			dataType: "json",
			success: $.proxy(this.handReq,this)
		})
	},
	handReq: function(data) {
		if(data[0].status == 1) {//购物车存在商品
			var data = data[1][0];
			this.str = `<div class="cart-tit">
						<span class="discout">折扣</span>
						<span class="cart-subtit">已满足买1件8.5折优惠</span>
					</div>
					<div class="cart-item clearfix">
						<div class="cart-item1">
							<a href="##" class="cart-img">
								<img src="${data.img}">
							</a>
							<div class="cart-des">
								<a href="##">${data.title}</a><br/>
								<span class="cart-size">尺码：M</span>
							</div>
						</div>
						<div class="cart-item2">
							<span class="cur-price">
								<em class="yuan">¥</em><span>${data.price}</span>
							</span><br/>
							<span class="del-price">
								<em class="yuan">¥</em><span>676</span>
							</span>
						</div>
						<div class="cart-item3">
							<div class="item3-inner">
								<a class="cart-reduce">-</a>
								<input type="text" value="${data.num}" class="cart-num">
								<a href="##" class="cart-add">+</a>
							</div>
						</div>
						<div class="cart-item4">
							<em class="yuan">¥</em>
							<span>${data.num * data.price}</span>
						</div>
						<div class="cart-item5">
							<a href="##" class="del-btn">删除</a>
						</div>
					</div>`;
			this.ele = $("<div></div>").append(this.str);
			this.cartList.append(this.ele);
			this.proNum.text(data.num);
			this.sumMoney.text(data.num*data.price);
			this.delPro();
			this.addClick();
			this.reduceClick();
		} else {
			this.cartList.html("购物车啥都没有");
		}
	},
	delPro: function() {
		var delBtn = this.ele.find(".del-btn");
		delBtn.click(function() {
			$(this).parent().parent().parent().remove();
		});
	},
	addClick: function() {
		this.addBtn = this.ele.find(".cart-add");
		this.numIpt =  this.ele.find(".cart-num");
		this.addBtn.click($.proxy(this.handlAddClick,this));
	},
	handlAddClick: function() {
		var val = this.numIpt.val();
		val++;
		this.numIpt.val(val);
		var sum = this.unitPrice * val;
		this.sumMoney.text(sum);
		this.sumMoney2.text(sum);
		this.xiaoji.text(sum);
	},
	reduceClick: function() {
		this.reduceBtn = this.ele.find(".cart-reduce");
		this.reduceBtn.click($.proxy(this.handReBtn,this));
	},
	handReBtn: function() {
		var val = this.numIpt.val();
		if(val <= 2) {
			val = 1;
		} else {
			val--;
		}
		this.numIpt.val(val);
		var sum = this.unitPrice * val;
		this.sumMoney.text(sum);
		this.sumMoney2.text(sum);
		this.xiaoji.text(sum);
	}
})
new ShowData();
function ShowData() {
	this.cartList = $("#cart-list");
	this.sumMoney = $(".sum-money");
	this.sumNum = $("#sum-num");
	this.sumNumSm = $(".cart-num");
	this.data = [];
	//点击结算按钮跳转购物车页面
	this.checkBtn = $(".check-btn");
	this.init();
}
$.extend(ShowData.prototype,{
	init: function() {
		this.requestData();
		this.checkBtn.click($.proxy(this.handCheck,this));
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
			this.data = data[1];
			this.str = "";
			var tempMoney = 0;
			var tempNum = 0;
			for(var i = 0; i < this.data.length; i++) {
				this.str += `<div class="cart-item">
									<dl class="cart-item-inner">
										<dt class="cart-item-info">
											<a href="#">
												<img src="${this.data[i].img}">
											</a>
											<p class="pro-name">
												<a href="#">${this.data[i].title}</a>
											</p>
											<span class="pro-size">均码</span>
										</dt>
										<dd class="single-num">1</dd>
										<dd class="pro-money">
											￥<span class="money-num">${this.data[i].price}</span>
										</dd>
									</dl>
								</div>`;
				tempMoney += this.data[i].num*this.data[i].price;
				tempNum += Number(this.data[i].num);
			}
			this.sumMoney.text(tempMoney);
			this.sumNum.text(tempNum);
			this.sumNumSm.text(tempNum);
			this.el = $("<div></div>").append(this.str);
			this.cartList.html(this.el);
			this.update();//更新数量
		} else {
			this.cartList.html("购物车啥都没有");
		}
	},
	update: function() {
		this.data.forEach(function(item,i) {	
			$('.single-num').eq(i).text(item.num);
		})
	},
	handCheck: function() {
		location.href = "cart.html";
	}
})
new ShowData();
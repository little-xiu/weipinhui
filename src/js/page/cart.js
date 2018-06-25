function ShowData() {
	this.cartList = $("#cart-inner");
	this.proNum = $(".pro-num");//共  件商品
	this.sumMoney = $(".sum-money");
	this.init();
}
$.extend(ShowData.prototype,{
	init: function() {
		this.requestData();
		//对未来元素事件绑定（购物车增删改），用事件代理做
		this.proxyClick();
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
			var data = data[1];
			this.str = "";
			//获取总数量可在循环前设置临时变量，在循环中+=自身，再赋值给别人
			var tempNum = 0;//存储所有商品数量
			var tempPrice = 0;//存储所有商品小计之和
			for(var i = 0; i < data.length; i++) {
				this.str += `<div class="cart-tit">
							<span class="discout">折扣</span>
							<span class="cart-subtit">已满足买1件8.5折优惠</span>
						</div>
						<div class="cart-item clearfix" data-id="${data[i].id}">
							<div class="cart-item1">
								<a href="##" class="cart-img">
									<img src="${data[i].img}">
								</a>
								<div class="cart-des">
									<a href="##">${data[i].title}</a><br/>
									<span class="cart-size">尺码：M</span>
								</div>
							</div>
							<div class="cart-item2">
								<span class="cur-price">
									<em class="yuan">¥</em><span class="singlePrice">${data[i].price}</span>
								</span><br/>
								<span class="del-price">
									<em class="yuan">¥</em><span>676</span>
								</span>
							</div>
							<div class="cart-item3">
								<div class="item3-inner">
									<a class="cart-reduce">-</a>
									<input type="text" value="${data[i].num}" class="cart-num">
									<a href="javascript:;" class="cart-add">+</a>
								</div>
							</div>
							<div class="cart-item4">
								<em class="yuan">¥</em>
								<span class="smSumMoney">${data[i].num * data[i].price}</span>
							</div>
							<div class="cart-item5">
								<a href="javascript:;" class="del-btn">删除</a>
							</div>
						</div>`;
				tempNum += Number(data[i].num);
				tempPrice += data[i].num * data[i].price;
			}
			this.ele = $("<div></div>").append(this.str);
			this.cartList.html(this.ele);
			this.proNum.text(tempNum);
			this.sumMoney.text(tempPrice);
		} else {
			this.cartList.html("购物车啥都没有");
		}
	},
	proxyClick: function() {
		this.cartList.click($.proxy(this.handProxy,this));
	},
	handProxy: function(event) {
		var target = event.target;//是DOM对象
		//删除
		if(target.tagName == "A" && target.className == "del-btn") {
			var id = $(target).parent().parent().attr("data-id");
			$.ajax({
				url: "../php/delPro.php",
				type: "post",
				data: {
					id: id
				},
				success: $.proxy(this.handDelAjax,this)
			})//增加
		} else if(target.tagName == "A" && target.className == "cart-add") {
			var id = $(target).parent().parent().parent().attr("data-id");
			var num = Number($(target).prev().val()) + 1;
			$.ajax({
				url: "../php/update.php",
				type: "post",
				data: {
					id: id,
					num: num
				},
				success: $.proxy(this.handAdd,this)
			})//减少
		} else if(target.tagName == "A" && target.className == "cart-reduce") {
			var id = $(target).parent().parent().parent().attr("data-id");
			var num = Math.max(1,Number($(target).next().val()) - 1);
			$.ajax({
				url: "../php/update.php",
				type: "post",
				data: {
					id:id,
					num:num
				},
				success: $.proxy(this.handReduce,this)
			})
		}
	},
	handAdd: function() {
		this.requestData();
	},
	handReduce: function() {
		this.requestData();
	},
	handDelAjax: function() {
		this.requestData();
	}
})
new ShowData();
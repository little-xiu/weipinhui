function ShowData() {
	this.box = $("#cart-inner");
	this.sumMoney = $("#sum-money");
	this.sumMoney2 = $(".sum-money");

	this.init();
}
$.extend(ShowData.prototype,{
	init: function() {
		var arr = location.href.split("?")[1].split(";");
		for(var i = 0; i < arr.length; i++) {
			var newArr = arr[i].split("=");
			if(newArr[0] == "id") {
				this.id = newArr[1];
			}
			if(newArr[0] == "num") {
				this.num = newArr[1];
			}
		}
		this.load();
	},
	load: function() {
		$.ajax({
			type: "post",
			url: "../json/detailsWomen.json",
			dataType: "json",
			success: $.proxy(this.handlLoad,this)
		});
	},
	handlLoad: function(data) {
		for(var i = 0; i < data.length; i++) {
			if(data[i].id == this.id) {
				this.data = data[i];
			}
		}
		this.render();
	},
	render: function() {
		var str = `<div class="cart-tit">
								<span class="discout">折扣</span>
								<span class="cart-subtit">已满足买1件8.5折优惠</span>
							</div>
							<div class="cart-item clearfix">
								<div class="cart-item1">
									<a href="javascript:;" class="cart-img">
										<img src="${this.data.smImg1}">
									</a>
									<div class="cart-des">
										<a href="javascript:;">${this.data.title}</a><br/>
										<span class="cart-size">尺码：M</span>
									</div>
								</div>
								<div class="cart-item2">
									<span class="cur-price">
										<em class="yuan">¥</em><span>${this.data.price}</span>
									</span><br/>
									<span class="del-price">
										<em class="yuan">¥</em><span>${this.data.delPrice}</span>
									</span>
								</div>
								<div class="cart-item3">
									<div class="item3-inner">
										<a class="cart-reduce">-</a>
										<input type="text" value="${this.num}" class="cart-num">
										<a href="javascript:;" class="cart-add">+</a>
									</div>
								</div>
								<div class="cart-item4">
									<em class="yuan">¥</em>
									<span class="sum-num">${this.data.price*this.num}</span>
								</div>
								<div class="cart-item5">
									<a href="javascript:;" class="del-btn">删除</a>
								</div>
							</div>`;
		this.sumMoney.text(this.data.price*this.num);
		this.sumMoney2.text(this.data.price*this.num);
		this.unitPrice = this.data.price;
		this.ele = $("<div></div>").append(str);
		this.xiaoji = this.ele.find(".sum-num");
		this.box.append(this.ele);
		this.delPro();
		this.addClick();
		this.reduceClick();
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

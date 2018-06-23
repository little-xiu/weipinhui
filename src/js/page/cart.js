function ShowData() {
	this.cartList = $("#cart-inner");
	this.proNum = $(".pro-num");//共  件商品
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
			var data = data[1];
			this.str = "";
			//获取总数量可在循环前设置临时变量，在循环中+=自身，再赋值给别人
			var tempNum = 0;
			var tempPrice = 0;
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
									<a href="##" class="cart-add">+</a>
								</div>
							</div>
							<div class="cart-item4">
								<em class="yuan">¥</em>
								<span class="smSumMoney">${data[i].num * data[i].price}</span>
							</div>
							<div class="cart-item5">
								<a href="##" class="del-btn">删除</a>
							</div>
						</div>`;
				tempNum += Number(data[i].num);
				tempPrice += tempNum * data[i].price;
			}
			this.ele = $("<div></div>").append(this.str);
			this.cartList.append(this.ele);
			this.proNum.text(tempNum);
			this.sumMoney.text(tempNum*tempPrice);
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
			var targetEle = $(this).parent().parent();
			var id = targetEle.attr("data-id");
			this.delNum = $(this).parent().prev().prev().find(".cart-num").val();
			//数据库商品删除
			$.ajax({
				url: "../php/delPro.php",
				type: "post",
				data: {
					id: id
				},
				success: $.proxy(this.handDelAjax,this)
			})
		});
	},
	handDelAjax: function(data) {
		var numOri = this.proNum.text();
		var numChange = numOri - this.delNum;
		this.proNum.text(numChange);
		targetEle.prev().remove();//先删除前一个兄弟元素，然后再删除自身
		targetEle.remove();
	},
	addClick: function() {
		this.addBtn = this.ele.find(".cart-add");
		//点击数量增加
		this.addBtn.each($.proxy(this.handAddEach,this));
	},
	handAddEach: function(i) {
		this.addBtn.eq(i).on("click",i,$.proxy(this.handlAddClick,this));
	},
	handlAddClick: function(event) {
		var index = event.data;
		var targetEle = this.addBtn.eq(index);
		var ipt = targetEle.prev();
		var val = Number(ipt.val());
		var id = targetEle.parent().parent().parent().attr("data-id");
		val++;
		ipt.val(val);
		//共  件商品
		var numOri = this.proNum.text();
		numOri++;
		this.proNum.text(numOri);


		this.unitPrice = Number(targetEle.parent().parent().prev().find(".singlePrice").text());
		var sum = this.unitPrice * val;
		var sumOri = Number(this.sumMoney.eq(0).text());
		this.smSumMoney = targetEle.parent().parent().next().find(".smSumMoney");
		this.smSumMoney.text(sum);//小计
		var total = sumOri + this.unitPrice;
		this.sumMoney.text(total);//总金额
		$.ajax({
			url: "../php/update.php",
			type: "post",
			data: {
				id: id,
				num: val
			},
			success: $.proxy(this.handAddAjax,this)
		})
	},
	handAddAjax: function(data) {
		console.log(data)
	},
	reduceClick: function() {
		this.reduceBtn = this.ele.find(".cart-reduce");
		this.reduceBtn.each($.proxy(this.handReEach,this));
	},
	handReEach: function(i) {
		this.reduceBtn.eq(i).on("click",i,$.proxy(this.handReBtn,this));
	},
	handReBtn: function(event) {
		var index = event.data;
		var targetEle = this.reduceBtn.eq(index);
		var ipt = targetEle.next();
		var val = Number(ipt.val());
		var id = targetEle.parent().parent().parent().attr("data-id");
		if(val <= 2) {
			val = 1;
		} else {
			val--;
		}
		ipt.val(val);
		//共  件商品
		var numOri = this.proNum.text();
		numOri--;
		this.proNum.text(numOri);
		this.unitPrice = Number(targetEle.parent().parent().prev().find(".singlePrice").text());
		var sum = this.unitPrice * val;
		var sumOri = Number(this.sumMoney.eq(0).text());
		this.smSumMoney = targetEle.parent().parent().next().find(".smSumMoney");
		this.smSumMoney.text(sum);//小计
		var total = sumOri + this.unitPrice;
		this.sumMoney.text(total);//总金额
		$.ajax({
			url: "../php/update.php",
			type: "post",
			data: {
				id: id,
				num: val
			},
			success: $.proxy(this.handReAjax,this)
		})
	},
	handReAjax: function(data) {
		console.log(data)
	}
})
new ShowData();
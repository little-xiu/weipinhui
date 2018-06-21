$(function() {
	function RenDetWomen() {
		this.id = location.href.split("?")[1].split("=")[1];
		this.navTit = $("#nav-tit");
		this.detailsR = $("#details-right");
		this.detailsL = $("#details-left");
		this.init();
	}
	$.extend(RenDetWomen.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/detailsWomen.json",
				dataType: "json",
				success: $.proxy(this.handlShowData,this)
			});
		},
		handlShowData: function(data) {
			//通过id找出商品
			for(var i = 0; i < data.length; i++) {
				if(this.id == data[i].id) {
					this.data = data[i];
				}
			}
			var str = `<div class="details-tit">
										<h5>${this.data.title}</h5>
										<p>面料轻薄 送吊带</p>
									</div>
									<div class="details-price-box">
										<span class="d-price-wrap">
											<em>￥</em>
											<span>${this.data.price}</span>
										</span>
										<span class="discout-wrap">
											<span class="cur-discout">3.3折</span><br/>
											<span class="origin-price">
												<em>￥</em><span>${this.data.delPrice}</span>
											</span>
										</span>
										<div class="discout-info">
											<dl class="clearfix">
												<dt>折扣</dt>
												<dd>610时尚风暴-1件85折</dd>
											</dl>
											<dl class="clearfix">
												<dt>加价购</dt>
												<dd>指定专场购物满1元即可换购，抢完即止</dd>
												<dd>
													<a href="##" class="ck-more">
														查看
														<i class="iconfont">&#xe611;</i>
													</a>
												</dd>
											</dl>
										</div>
									</div>`;
			this.detailsR.prepend(str);
			this.navTit.text(this.data.title);
			var strImg = `<div class="details-pic-big">
											<img src="${this.data.bigImg1}">
											<div class="cover"></div>
										</div>
										<div class="max-img">
											<img src="${this.data.bigImg1}" alt="">
										</div>
										<div class="details-sm-box">
											<ul class="details-pic-sm clearfix">
												<li><img src="${this.data.smImg1}" data-src="${this.data.bigImg1}"></li>
												<li><img src="${this.data.smImg2}" data-src="${this.data.bigImg2}"></li>
												<li><img src="${this.data.smImg3}" data-src="${this.data.bigImg3}"></li>
												<li><img src="${this.data.smImg4}" data-src="${this.data.bigImg4}"></li>
											</ul>
										</div>`;
			this.detailsL.append(strImg);
			new Magnify();
			new CartClick(this.data.smImg1,this.data.title,this.data.price,this.data.id);
		}
	})
	new RenDetWomen();

	//加减功能
	function ChangeNum() {
		this.addBtn = $(".des-add");
		this.reduceBtn = $(".des-reduce");
		this.numIpt = $(".det-num");
		this.init();
	}
	$.extend(ChangeNum.prototype,{
		init: function() {
			this.addClick();
			this.reduceClick();
		},
		addClick: function() {
			this.addBtn.click($.proxy(this.handlAddClick,this));
		},
		handlAddClick: function() {
			var val = this.numIpt.val();
			val++;
			this.numIpt.val(val);
		},
		reduceClick: function() {
			this.reduceBtn.click($.proxy(this.handlReduce,this));
		},
		handlReduce: function() {
			var val = this.numIpt.val();
			if(val <= 2) {
				val = 1;
			} else {
				val--;
			}
			this.numIpt.val(val);
		}
	})
	new ChangeNum();
	//点击加入购物车按钮
	function CartClick(img,tit,price,id) {
		this.img = img;
		this.tit = tit;
		this.price = price;
		this.id = id;
		this.addBtn = $(".add-cart-btn");
		//点击结算按钮跳转购物车页面
		this.checkBtn = $(".check-btn");
		this.cartHover = $("#cart-hover");
		this.id = location.href.split("?")[1].split("=")[1];
		this.init();
	}
	$.extend(CartClick.prototype,{
		init: function() {
			this.addBtn.click($.proxy(this.handlClick,this));
			this.checkBtn.click($.proxy(this.handCheck,this));
		},
		handlClick: function() {
			// this.val = $(".det-num").val();
			if(!localStorage.loginStatus) {
				location.href = "login.html";//location.href可以设置以html页面为参照的相对地址；
			} else {
				//登录了添加商品到购物车
				this.cartHover.stop(true).animate({right: 36}).delay(2000).animate({right: -300});			
				new RenSideCart(this.img,this.tit,this.price,this.id);
			}
		},
		handCheck: function() {
			location.href = "cart.html?id=this.id";
		}
	})
	

	//渲染菜单栏购物车商品
	function RenSideCart(img,tit,price,id) {
		this.img = img;
		this.tit = tit;
		this.price = price;
		this.id = id;
		this.cartList = $("#cart-list");
		this.proNum = $(".pro-num");
		this.sumMoney = $(".sum-money");
		this.init();
	}
	$.extend(RenSideCart.prototype,{
		init: function() {
			this.show();
		},
		show: function() {
			//查询数据库判断商品是否存在，不存在追加，存在则累加；
			$.ajax({
				type: "post",
				url: "../php/addPro.php",
				data: {
					id: this.id,
					num: parseInt(this.proNum.eq(0).text()),
					title: this.tit,
					img: this.img,
					price: this.price
				},
				dataType: "json",
				success: $.proxy(this.handShow,this)
			})
		},
		handShow: function(data) {
			if(data.status == 2) {//商品添加
				new ShowData();
			} else if (data.status == 1){
				this.num = parseInt(this.proNum.eq(0).text());
				this.num += 1;
				this.proNum.text(this.num);
				this.sumMoney.text("￥" +parseInt(this.proNum.eq(0).text()) * this.price);
			}		
		},
	})

	function ShowData() {
		this.cartList = $("#cart-list");
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
				this.str = `<div class="cart-item">
									<dl class="cart-item-inner">
										<dt class="cart-item-info">
											<a href="#">
												<img src="${data.img}">
											</a>
											<p class="pro-name">
												<a href="#">${data.title}</a>
											</p>
											<span class="pro-size">均码</span>
										</dt>
										<dd class="pro-num">1</dd>
										<dd class="pro-money">
											￥<span class="money-num">${data.price}</span>
										</dd>
									</dl>
								</div>`;
				this.el = $("<div></div>").append(this.str);
				this.cartList.append(this.el);
				this.proNum.text(data.num);
				this.sumMoney.text(data.num*data.price);
			} else {
				this.cartList.html("购物车啥都没有");
			}
		}
	})
	new ShowData();
})
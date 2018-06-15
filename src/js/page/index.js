$(function() {
	//精选楼层
	function RenHandPick() {
		this.box = $("#handPick");
		this.init();
	}
	$.extend(RenHandPick.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/handPick.json",
				dataType: 'json',
				success: $.proxy(this.handleShowData,this)});
		},
		handleShowData: function(data) {
			var str = "";
			for(var i = 0; i < data.length; i++) {
				str += `<div class="handp-brand-item">
									<a href="##" class="hp-bg-link">
										<img src="${data[i].imgBg}">
									</a>
									<a href="##" class="hp-txt-link">
										<img src="${data[i].imgTxt}">
										<p class="hp-txt1">${data[i].txt1}</p>
										<p class="hp-txt2">${data[i].txt2}</p>
									</a>
									<div class="hp-brand-hover">
										<div class="brand-hover-img">
											<a href="##" class="brand-hover-link">
												<img src="${data[i].hoverImg1}">
												<p>${data[i].price}</p>
											</a>
											<a href="##" class="brand-hover-link">
												<img src="${data[i].hoverImg1}">
												<p>${data[i].price}</p>
											</a>
											<a href="##" class="brand-hover-link">
												<img src="${data[i].hoverImg1}">
												<p>${data[i].price}</p>
											</a>
										</div>
										<a href="##" class="brand-logo">
											<img src="${data[i].imgTxt}">
										</a>
										<span class="collect-brand">
											收藏品牌
										</span>
										<a href="##" class="enter-brand">进入专场</a>
									</div> 
								</div>`;
			}
			this.ele = $("<div></div>").append(str);
			this.box.append(this.ele);
		}
	})
	new RenHandPick();
	//女装
	function RenWomen() {
		this.box = $("#women-box");
		this.init();
	}
	$.extend(RenWomen.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/women.json",
				dataType: "json",
				success: $.proxy(this.handleShowData,this)});
		},
		handleShowData: function(obj) {
			for (var key in obj) {
				
				if(key == "content") {
					var data = obj[key];//数组
					var str = "";
					for(var i = 0; i < data.length; i++) {
						str += `<div class="women-item">
											<a href="http://localhost/work/weipinhui/src/html/listWomen.html?id=${data[i].id}">
												<img src="${data[i].img}">
											</a>
											<p class="women-info">
												${data[i].info}
												<span class="brand-collect">收藏品牌</span>
											</p>
											<div class="women-subtit">
												<span class="brand-discount">
													<span class="dis-num">${data[i].discout}</span>折起</span>
												<span class="women-name">
													${data[i].tit}
												</span>
												<p class="brand-time">
													<i></i>
													<span>剩3天</span>
												</p>
											</div>
										</div>`;
					}
					this.ele = $("<div class='w1020 clearfix'></div>").append(str);
				}
				if(key == "title") {
					var oTitData = obj[key];
					var strTit = `<div class="women-tit">
													<img src="${obj[key].img}">
													<a href="##" class="all-women-btn">${obj[key].tit}</a>
												</div>`;
					this.tit = $("<div></div>").append(strTit);
				}
				if(key == "more") {
					var strBtn = `<div class="shop-more">
													<a href="#" class="shop-more-btn">
														${obj[key]}
														<span class="arrow">&gt;</span>
													</a>
												</div>`;
				}
			}
			this.box.prepend(this.tit,this.ele,strBtn);
		}
	});
	new RenWomen();
	//鞋包
	function RenBag() {
		this.box = $("#bag-box");
		this.init();
	}
	$.extend(RenBag.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/bag.json",
				dataType: "json",
				success: $.proxy(this.handleShowData,this)});
		},
		handleShowData: function(obj) {
			for (var key in obj) {				
				if(key == "content") {
					var data = obj[key];//数组
					var str = "";
					for(var i = 0; i < data.length; i++) {
						str += `<div class="women-item">
											<a href="##">
												<img src="${data[i].img}">
											</a>
											<p class="women-info">
												${data[i].info}
												<span class="brand-collect">收藏品牌</span>
											</p>
											<div class="women-subtit">
												<span class="brand-discount">
													<span class="dis-num">${data[i].discout}</span>折起</span>
												<span class="women-name">
													${data[i].tit}
												</span>
												<p class="brand-time">
													<i></i>
													<span>剩3天</span>
												</p>
											</div>
										</div>`;
					}
					this.ele = $("<div class='w1020 clearfix'></div>").append(str);
				}
				if(key == "title") {
					var oTitData = obj[key];
					var strTit = `<div class="women-tit">
													<img src="${obj[key].img}">
													<a href="##" class="all-women-btn">${obj[key].tit}</a>
												</div>`;
					this.tit = $("<div></div>").append(strTit);
				}
				if(key == "more") {
					var strBtn = `<div class="shop-more">
													<a href="#" class="shop-more-btn">
														${obj[key]}
														<span class="arrow">&gt;</span>
													</a>
												</div>`;
				}
			}
			this.box.prepend(this.tit,this.ele,strBtn);
		}
	});
	new RenBag();

		//男装楼层数据渲染
	function RenMan() {
		this.box = $("#man-box");
		this.init();
	}
	$.extend(RenMan.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/man.json",
				dataType: "json",
				success: $.proxy(this.handleShowData,this)});
		},
		handleShowData: function(obj) {
			for (var key in obj) {				
				if(key == "content") {
					var data = obj[key];//数组
					var str = "";
					for(var i = 0; i < data.length; i++) {
						str += `<div class="women-item">
											<a href="##">
												<img src="${data[i].img}">
											</a>
											<p class="women-info">
												${data[i].info}
												<span class="brand-collect">收藏品牌</span>
											</p>
											<div class="women-subtit">
												<span class="brand-discount">
													<span class="dis-num">${data[i].discout}</span>折起</span>
												<span class="women-name">
													${data[i].tit}
												</span>
												<p class="brand-time">
													<i></i>
													<span>剩3天</span>
												</p>
											</div>
										</div>`;
					}
					this.ele = $("<div class='w1020 clearfix'></div>").append(str);
				}
				if(key == "title") {
					var oTitData = obj[key];
					var strTit = `<div class="women-tit">
													<img src="${obj[key].img}">
													<a href="##" class="all-women-btn">${obj[key].tit}</a>
												</div>`;
					this.tit = $("<div></div>").append(strTit);
				}
				if(key == "more") {
					var strBtn = `<div class="shop-more">
													<a href="#" class="shop-more-btn">
														${obj[key]}
														<span class="arrow">&gt;</span>
													</a>
												</div>`;
				}
			}
			this.box.prepend(this.tit,this.ele,strBtn);
		}
	});
	new RenMan();

	//装饰手表楼层数据渲染
	function RenJew() {
		this.box = $("#jewelry-box");
		this.init();
	}
	$.extend(RenJew.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/jewelry.json",
				dataType: "json",
				success: $.proxy(this.handleShowData,this)});
		},
		handleShowData: function(obj) {
			for (var key in obj) {				
				if(key == "content") {
					var data = obj[key];//数组
					var str = "";
					for(var i = 0; i < data.length; i++) {
						str += `<div class="women-item">
											<a href="##">
												<img src="${data[i].img}">
											</a>
											<p class="women-info">
												${data[i].info}
												<span class="brand-collect">收藏品牌</span>
											</p>
											<div class="women-subtit">
												<span class="brand-discount">
													<span class="dis-num">${data[i].discout}</span>折起</span>
												<span class="women-name">
													${data[i].tit}
												</span>
												<p class="brand-time">
													<i></i>
													<span>剩3天</span>
												</p>
											</div>
										</div>`;
					}
					this.ele = $("<div class='w1020 clearfix'></div>").append(str);
				}
				if(key == "title") {
					var oTitData = obj[key];
					var strTit = `<div class="women-tit">
													<img src="${obj[key].img}">
													<a href="##" class="all-women-btn">${obj[key].tit}</a>
												</div>`;
					this.tit = $("<div></div>").append(strTit);
				}
				if(key == "more") {
					var strBtn = `<div class="shop-more">
													<a href="#" class="shop-more-btn">
														${obj[key]}
														<span class="arrow">&gt;</span>
													</a>
												</div>`;
				}
			}
			this.box.prepend(this.tit,this.ele,strBtn);
		}
	});
	new RenJew();
	//楼层效果
	function FloorNav() {
		this.nav = $(".fixed-floor");
		this.aBtn = this.nav.find(".floor-link");
		this.aFloor = $(".floor-item");
		this.init();
	}
	$.extend(FloorNav.prototype,{
		init: function() {
			this.show();
			this.btnClick();
		},
		show: function() {
			$(document).scroll($.proxy(this.handlShow,this));
		},
		handlShow: function() {
			var scrollTop = $(document).scrollTop() + 15;
			var _this = this;
			if(scrollTop > 720) {
				this.nav.css("display","block");
			} else {
				this.nav.css("display","none");
			}
			//滚动到对应楼层让其序号高亮
			this.aFloor.each(function(i,item) {
				var t = $(item).offset().top;
				var h = $(item).height();
				if(t <= scrollTop && t + h >= scrollTop) {
					_this.aBtn.eq(i).addClass("on").siblings().removeClass("on");
				}
			})
		},
		btnClick: function() {
			this.aBtn.each($.proxy(this.handlBtnClick,this));
		},
		handlBtnClick: function(i) {
			this.aBtn.eq(i).on("click",i,$.proxy(this.handlClick,this));
		},
		handlClick: function(event) {
			var index = event.data;
			var t = this.aFloor.eq(index).offset().top;
			$("html").scrollTop(t);
		}
	})
	new FloorNav();
})
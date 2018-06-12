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
})
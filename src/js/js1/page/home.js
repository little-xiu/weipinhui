$(function() {
	function LoadHandpick() {
		this.box = $("#handPick");
		this.init();
	}
	$.extend(LoadHandpick.prototype,{
		init: function() {
			this.showData();
		},
		showData: function() {
			$.ajax({
				type: "post",
				url: "../json/product.json",
				dataType: "json",
				success: $.proxy(this.handleShow,this)
			});
		},
		handleShow: function(data) {
									for(var key in data) {
										if(key == "handPick") {
											var str = "";
											for(var i = 0; i < data[key].length; i++) {
												str += `<div class="handp-brand-item">
																	<a href="##" class="hp-bg-link">
																		<img src="${data[key][i].imgBg}">
																	</a>
																	<a href="##" class="hp-txt-link">
																		<img src="${data[key][i].imgTxt}">
																		<p class="hp-txt1">${data[key][i].txt1}</p>
																		<p class="hp-txt2">${data[key][i].txt2}</p>
																	</a>
																	<div class="hp-brand-hover">
																		<div class="brand-hover-img">
																			<a href="##" class="brand-hover-link">
																				<img src="${data[key][i].hoverImg1}">
																				<p>${data[key][i].price}</p>
																			</a>
																			<a href="##" class="brand-hover-link">
																				<img src="${data[key][i].hoverImg1}">
																				<p>${data[key][i].price}</p>
																			</a>
																			<a href="##" class="brand-hover-link">
																				<img src="${data[key][i].hoverImg1}">
																				<p>${data[key][i].price}</p>
																			</a>
																		</div>
																		<a href="##" class="brand-logo">
																			<img src="${data[key][i].imgTxt}">
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
									}
								},

	});
	//精选出加载数据
	new LoadHandpick();

	//女装
	function LoadWomen() {
		this.wrap = $("#women-wrap");
		this.box = $("#women-box");
		this.init();
	}
	$.extend(LoadWomen.prototype,{
		init: function() {
			this.show();
		},
		show: function() {
			$.ajax({
				type: "post",
				url: "../json/product.json",
				dataType: "json",
				success: $.proxy(this.handleShow,this)
			})
		},
		handleShow: function(data) {
			for(var key1 in data) {
				if(key1 == "floor") {
					var obj1 = data[key1];
					for(var key2 in obj1) {
						var obj = obj1[key2];//women bag 
						// console.log(obj)
						for(var key in obj) {
							if(key == "title") {
								var oTitData = obj[key];
								// console.log(obj[key])
								var strTit = `<div class="women-tit">
																<img src="${obj[key].img}">
																<a href="##" class="all-women-btn">${obj[key].tit}</a>
															</div>`;
								this.tit = $("<div></div>").append(strTit);
								this.box.append(this.tit);
							}
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
								this.box.append(this.ele);
							}
							if(key == "more") {
								var strBtn = `<div class="shop-more">
																<a href="#" class="shop-more-btn">
																	${obj[key]}
																	<span class="arrow">&gt;</span>
																</a>
															</div>`;
								var _this = this;
								/*if(this.ele.find(".brand-time")) {
									console.log(this.ele)
									this.box.append(strBtn);
								}*/
								// this.ele.append(strBtn);
								// console.log(this.ele)
								window.onload = function() {
									_this.box.append(strBtn);
								}
							}
						}
					}
				}
			}
		}
	})
	new LoadWomen();
})
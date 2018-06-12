$(function() {
	//首页女装楼层动态加载
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
											<a href="http://localhost/work/weipinhui/src/html/list/listWomen.html?id=${data[i].id}">
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
					this.
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

})
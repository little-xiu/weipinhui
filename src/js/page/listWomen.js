$(function() {
	function PageWomen() {
		this.box = $("#list-box");
		this.pageBox = $("#next-page");
		this.preBtn = $(".pre-page");
		this.nextBtn = $(".next-page");
		this.index = 1;
		this.init();
	}
	$.extend(PageWomen.prototype,{
		init: function() {
			this.loadImg();
		},
		loadImg: function() {
			$.ajax({
				type: "post",
				url: "../json/listWomen.json",
				dataType: "json",
				success: $.proxy(this.handleLoadImg,this)
			});
		},
		handleLoadImg: function(data) {
			this.data = data;
			this.pageNum = Math.ceil(this.data.length/4);
			this.page(1);
			this.addLink();
			this.preClick();
			this.nextClick();
		},
		page: function(n) {
			var str = '';//每页显示4张图片
			for (var i = (n-1)*4; i < Math.min(this.data.length,n*4); i++) {
				str += `<li class="list-item">
									<div class="list-item-inner">
										<div class="goods-img">
											<a href="http://localhost/work/weipinhui/src/html/detailWomen.html?id=${this.data[i].id}">
												<img src="${this.data[i].img}">
											</a>
										</div>
										<p class="goods-info">
											<span class="discout">${this.data[i].discout}折</span>
											<span class="origin-price-wrap">
												<em>¥</em>
												<span class="origin-price">${this.data[i].price}</span>
											</span>
											<span class="del-price-wrap">
												<em>¥</em>
												<span class="del-price">${this.data[i].delPrice}</span>
											</span>
										</p>
										<p class="goods-tit">
											<a href="##"> ${this.data[i].title}</a>
										</p>
									</div>
								</li>`;
			}
			this.box.html(str);
		},//动态添加页码
		addLink: function() {
			for (var i = 0; i < this.pageNum; i++) {
				var newLink = $("<a></a>");
				newLink.text(i+1);
				newLink.addClass("page-link");
				this.pageBox.before(newLink);
			}
			this.aLink = $(".page-link");
			this.aLink.eq(0).addClass("on");
			//给每一页添加点击事件
			this.aLink.each($.proxy(this.handleEach,this));
		},
		handleEach: function(i) {
			this.aLink.eq(i).on("click",i,$.proxy(this.handleClick,this));
		},
		handleClick: function(event) {
			var index = event.data;
			this.aLink.eq(index).addClass("on").siblings().removeClass("on");
			this.page(index+1);
			this.index = index+1;//同步下index
		},//点击上一页
		preClick: function() {
			this.preBtn.on("click",$.proxy(this.handlPreClick,this));
		},
		handlPreClick: function() {
			if(this.index == 1) {
				this.index = 1;
			} else {
				this.index--;
			}
			this.page(this.index);
			this.aLink.eq(this.index - 1).addClass("on").siblings().removeClass("on");
		},//点击下一页
		nextClick: function() {
			this.nextBtn.on("click",$.proxy(this.handlNextClick,this));
		},
		handlNextClick: function() {
			if(this.index == this.pageNum) {
				this.index = this.pageNum;
			} else {
				this.index ++;
			}
			this.page(this.index);
			this.aLink.eq(this.index - 1).addClass("on").siblings().removeClass("on");
		}
	})
	new PageWomen();
})
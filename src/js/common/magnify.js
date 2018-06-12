//放大镜
function Magnify() {
	this.middleBox = $(".details-pic-big");
	this.middleImg = this.middleBox.find("img");
	this.filter = this.middleBox.find(".cover");
	this.aImg = $(".details-pic-sm img");
	this.maxBox = $(".max-img");
	this.mBoxParent = this.middleBox.parent();
	this.maxImg = this.maxBox.find("img");
	this.init();
}
$.extend(Magnify.prototype,{
	init: function() {
		this.mouseover();
		this.mouseout();
		this.smClick();
	},
	mouseover: function() {
		this.middleBox.on("mouseover",$.proxy(this.handlMouseover,this));
	},
	handlMouseover: function() {
		this.filter.css("display","block");
		this.maxBox.css("display","block");
		this.middleBox.on("mousemove",$.proxy(this.handlMousemove,this));
	},
	handlMousemove: function(event) {
		var l = event.pageX - this.mBoxParent.offset().left - this.filter.width()/2;
		var t = event.pageY - this.mBoxParent.offset().top - this.filter.height()/2;
		var maxW = this.middleBox.width() - this.filter.width();
		var maxH = this.middleBox.height() - this.filter.height();
		l = (l > maxW) ? maxW : (l < 0 ? 0 : l);
		t = (t > maxH) ? maxH : (t < 0 ? 0 : t);
		this.filter.css({
			left:l,
			top: t
		});
		this.maxImg.css({
			left: -2 * l,
			top: -2 * t
		});
	},
	mouseout: function() {
		this.middleBox.on("mouseout",$.proxy(this.handlMouseout,this));
	},
	handlMouseout: function() {
		this.filter.css("display","none");
		this.maxBox.css("display","none");
	},
	smClick: function() {
		var _this = this;
		this.aImg.click(function() {
			var src = $(this).attr("data-src");
			_this.middleImg.attr("src",src);
			_this.maxImg.attr("src",src);
		})
	}
})
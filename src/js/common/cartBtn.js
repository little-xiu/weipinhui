function CartBtn() {
	this.btn = $("#cart-btn");
	this.cartTab = $("#cart-hover");
	this.closeBtn = $(".close-btn");
	this.init();
}
$.extend(CartBtn.prototype,{
	init: function() {
		this.btnClick();
	},
	btnClick: function() {
		this.btn.click($.proxy(this.handBtnClick,this));
		this.closeBtn.click($.proxy(this.handClose,this));
	},
	handBtnClick: function() {
		var r = this.cartTab.css("right");
		if(r == "-300px") {
			this.cartTab.css("right","36px");
		} else {
			this.cartTab.css("right","-300px");
		}
	},
	handClose: function() {
		this.cartTab.css("right","-300px");
	}
})
new CartBtn();
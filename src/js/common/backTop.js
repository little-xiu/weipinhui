function BackTop() {
	this.btn = $("#back-top");
	this.init();
}
$.extend(BackTop.prototype,{
	init: function() {
		this.btnClick();
	},
	btnClick: function() {
		this.btn.click($.proxy(this.handlClick,this));
	},
	handlClick: function() {
		$("html").scrollTop(0);
	}
})
new BackTop();
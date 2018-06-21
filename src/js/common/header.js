function Header(box) {
	this.box = box;
	this.init();
}
$.extend(Header.prototype,{
	init: function() {
		this.createDom();
	},
	createDom: function() {
		var str = `<div class="top-nav">
					<div class="head-inner">
						<div class="head-l">
							<div class="head-l-inner">
								深圳市
								<i class="triangle"></i>
							</div>
							<div class="head-l-tap">				
							</div>
						</div>
						<ul class="topnav-list">
							<li class="tnav-item1">
								<a href="javascript:;" class="login-btn">请登录</a>
								<i class="top-slash"></i>
								<span class="white-line"></span>
								<div class="tnav-item1-tab">
									<div class="tnav-tab1-info clearfix">
										<span class="tab1-bg"></span>
										<div class="tab1-info">
											<a href="javascript:;" class="login-btn">
												<span>您好！</span>
												<span>[请登录]</span>
											</a>
											<a href="javascript:;" class="exit-btn">[退出]</a>
										</div>
									</div>
									<div class="navtab1-list">
										<span>
											<a href="javascript:;">我的收藏</a>
										</span>
										<span>
											<a href="##">我的收藏</a>
										</span>
										<span>
											<a href="##">我的收藏</a>
										</span>
										<span>
											<a href="##">我的收藏</a>
										</span>
									</div>
								</div>
							</li>
							<li class="tnav-register-box">
								<a href="##" class="register-btn">注册</a>
								<i class="top-slash"></i>
							</li>
							<li class="tnav-gift">
								<i class="gift-icon"></i>
								<span>签到有礼</span>
								<i class="top-slash"></i>
							</li>
							<li class="my-order">
								<a href="##">我的订单</a>
								<i class="top-slash"></i>
							</li>
							<li class="topnav-buy">
								<a href="##">我的特卖</a>
								<i class="triangle"></i>
								<i class="top-slash"></i>
								<span class="white-line"></span>
								<div class="nav-buy-tab">
									<p class="list">
										<span>
											<a href="##">
												品牌收藏(0)
											</a>
										</span>
										<span>
											<a href="##">
												品牌收藏(0)
											</a>
										</span>
										<span>
											<a href="##">
												品牌收藏(0)
											</a>
										</span>
									</p>
								</div>
							</li>
							<li class="topnav-member">
								<a href="##">会员俱乐部</a>
								<i class="triangle"></i>
								<i class="top-slash"></i>
								<span class="white-line"></span>
								<div class="top-member-tab">
									<p class="list">
										<span>
											<a href="##">俱乐部首页</a>
										</span>
										<span>
											<a href="##">俱乐部首页</a>
										</span>
										<span>
											<a href="##">俱乐部首页</a>
										</span>
									</p>
								</div>
							</li>
							<li class="topnav-server">
								<a href="##">客户服务</a>
								<i class="triangle"></i>
								<i class="top-slash"></i>
								<span class="white-line"></span>
								<div class="top-server-tab">
									<p class="list">
										<span>
											<a href="##">联系客服</a>
										</span>
										<span>
											<a href="##">联系客服</a>
										</span>
										<span>
											<a href="##">联系客服</a>
										</span>
									</p>
								</div>
							</li>
							<li class="top-phone">
								<a href="##">手机版</a>
								<i class="phone-icon"></i>
								<i class="top-slash"></i>
								<span class="white-line"></span>
								<div class="top-phone-tab">
									<a href="##">
										<img src="../img/ercode.jpg">
									</a>
									<p class="ercode-txt">
										<a href="##">随时逛 及时抢</a>
									</p>
								</div>
							</li>
							<li class="topnav-more">
								<a href="##">更多</a>
								<i class="triangle"></i>
								<span class="white-line"></span>
								<div class="top-more-tab">
									<h5 class="h5-more">合作专区</h5>
									<p class="p-more">
										<a href="##">联名卡申请</a>
										<a href="##">联名卡</a>
										<a href="##">联名卡</a>
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>`;
		this.el = $("<div></div>").append(str);
		this.box.append(this.el);
	}
})
new Header($("#header-box"));

function Footer(box) {
	this.box = box;
	this.init();
}
$.extend(Footer.prototype,{
	init: function() {
		this.createDom();
	},
	createDom: function() {
		var str = `<div class="footer">
		<div class="footer-inner">
			<ul class="clearfix">
				<li class="foot-vip-icon foot-vip-icon1">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon2">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon3">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon4">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon5">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon6">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon7">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon8">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon9">中国第三</li>
				<li class="foot-vip-icon foot-vip-icon10">中国第三</li>
			</ul>
			<div class="foot-list">
				<dl class="flist-item">
					<dt>服务保障</dt>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
				</dl>
				<dl class="flist-item">
					<dt>服务保障</dt>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
				</dl>
				<dl class="flist-item">
					<dt>服务保障</dt>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
				</dl>
				<dl class="flist-item">
					<dt>服务保障</dt>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
				</dl>
				<dl class="flist-item">
					<dt>服务保障</dt>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
					<dd><a href="##">7天无理由放心退</a></dd>
					<dd><a href="##">正品保证</a></dd>
				</dl>
				<dl class="ft-code-box">
					<dt>唯品会APP二维码</dt>
					<dd>
						<img src="../img/ft-code.png">
					</dd>
					<dd>下载唯品会移动APP</dd>
				</dl>
			</div>
			<div class="footer-info">
				<p class="foot-links">
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>|
					<a href="##">关于我们</a>
				</p>
				<p class="copy-txt">
					Copyright © 2008-2018 vip.com，All Rights Reserved  使用本网站即表示接受<a href="##">唯品会用户协议</a>版权所有 <a href="##">广州唯品会电子商务有限公司</a><br/>
					<a href="##">
						<img src="../img/gongan.png">
						粤公网安备 44010302111111号
					</a>
					<a href="##">粤ICP备08114786号 </a>
					<a href="##">增值业务经营许可证：粤B2-20170777 </a>
					<a href="##">网络文化经营许可证：粤网文〔2015〕1528-229</a><br/>
					<a href="##">自营主体经营证照</a>
					<a href="##">风险监测信息</a>
					<a href="##">互联网药品交易服务资格证（粤C20140002）</a>
				</p>
			</div>
		</div>
	</div>`;
		this.el = $("<div></div>").append(str);
		this.box.append(this.el);
	}
})

function FixBar(box) {
	this.box = box;
	this.init();
}
$.extend(FixBar.prototype,{
	init: function() {
		this.createDom();
	},
	createDom: function() {
		var str = `<div class="fixed-bar">
		<div class="bar-item-wrap">
			<div class="bar-item-inner">
				<div class="bar-item">
					<a href="##" class="bar-link">
						<i class="iconfont">&#xe6f7;</i><br/>
						<span>账号</span>
					</a>
				</div>
				<div class="user-hover">
					<div class="user-hover-top">
						<a href="##">
							<img src="../img/login-logo.jpg">
						</a>
						<p class="user-top-txt">
							你好！请
							<a href="##" class="login-btn">登录</a>|
							<a href="##" class="register-btn">注册</a>
						</p>
					</div>
					<div class="user-hover-m clearfix">
						<p class="my-order">
							<a href="##">
								<i class="iconfont">&#xe62f;</i><br/>
								 我的订单
							</a>
						</p>
						<p class="my-msg">
							<a href="##">
								<i class="iconfont">&#xe615;</i><br/>
								 我的消息
							</a>
						</p>
					</div>
					<p>
						<a href="##" class="club-btn">会员俱乐部</a>
					</p>
				</div>
			</div>
			<div class="bar-item shop-bag">
				<a href="javascript:;" class="bar-link" id="cart-btn">
					<i class="iconfont">&#xe6c7;</i><br/>
					<span class="bar-name">购物袋</span>
					<span class="cart-num">0</span>
				</a>
			</div>
			<div class="cart-hover" id="cart-hover">
				<div class="cart-hover-top">
					<i class="close-btn">x</i>
					<a href="javascript:;">逛超时了，请尽快结算。</a>
				</div>
				<div class="cart-pro-box">
					<div class="cart-inner">
						<div class="cart-list" id="cart-list">
							
						</div>
						<div class="cart-bot">
							<p class="delivery-info">
								<span class="pro-num">0</span>
								<span class="delivery-address">件商品配送至深圳市</span>
								<span class="sum-money">￥230</span>
							</p>
							<a class="check-btn" href="javascript:;">去购物袋结算</a>
							<div class="cart-yao">
								<a class="cart-yao-btn">
									<span class="yao-l">
										医药商品
										<i>0</i>
									</span>
									<span class="yao-r">
										去医药清单
										<i>&gt;</i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="coupon-box">
				<a href="##" class="coupon-link">
					<i class="iconfont">&#xe610;</i><br/>
				</a>
				<p class="coupon-hover">我的优惠券</p>
			</div>
			<div class="coupon-box">
				<a href="##" class="coupon-link">
					<i class="iconfont">&#xe66c;</i><br/>
				</a>
				<p class="coupon-hover">品牌收藏</p>
			</div>
			<div class="coupon-box">
				<a href="##" class="coupon-link">
					<i class="iconfont">&#xe61b;</i><br/>
				</a>
				<p class="coupon-hover">商品收藏</p>
			</div>
			<div class="coupon-box">
				<a href="##" class="coupon-link">
					<i class="iconfont">&#xe60a;</i><br/>
				</a>
				<p class="coupon-hover">我的足迹</p>
			</div>
			<div class="coupon-box member-box">
				<a href="##" class="coupon-link">
					<i class="iconfont">&#xe675;</i><br/>
				</a>
				<p class="coupon-hover">会员反馈</p>
			</div>
			<div class="coupon-box">
				<a href="##" class="coupon-link" id="back-top">
					<i class="iconfont">&#xe60e;</i><br/>
				</a>
				<p class="coupon-hover">返回顶部</p>
			</div>
		</div> 
	</div>`;
		this.el = $("<div></div>").append(str);
		this.box.append(this.el);
	}
})
new Footer($("#footer"));
new FixBar($("#fix-bar"));
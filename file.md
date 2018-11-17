// 内容功能树
////???????????????????????  横屏？？？？
	入口(Portal)
	|---  登录(login) 返回一个登录成功的状态布尔值, 进行下一步操作
	|---  注册(register) 

	|---头部(head) 
	|	|---左按钮(headLeftBtn)
	|	|---中部内容(headMiddle)
	|	└---右按钮


	|---主内容(main)
	|	|---消息 message
	|	|	|--- 头部反馈
	|   |   |    |---left
	|   |   |    |	 |---set 
	|   |   |    |   |   |---头部 ===> 二维码 图标 呢称 等级 个性签名
	|   |   |    |   |   |---内容 ===> 了解会员特权	QQ钱包 个性装扮 我的收藏 我的相册 我的文件
	|   |   |    |   |   └---底部 ===> 设置 (日间/晚间) 地理位置+温度
	|   |   |    |---middle =====> array['消息','电话']
	|   |   |    |      |---message(消息) 
	|   |   |    |      └---phone(电话) 
	|   |   |    └---right =====> add (创建群聊，加好友/群，扫一扫，面对面快传，付款，拍摄，面对面红包)
	|	|	|---主内容
	|   |   |   |---消息 ===> 搜索 (好友动态 文章 公众号) 	消息列表
	|   |   |   └---电话 ===> 搜索 (好友动态 文章 公众号) 电话黄页 通讯录 找人聊聊

	|	|---联系人 Contact
	|	|	|--- 头部反馈
	|   |   |    |---left
	|   |   |    |	 |---set 
	|   |   |    |   |   |---头部 ===> 二维码 图标 呢称 等级 个性签名
	|   |   |    |   |   |---内容 ===> 了解会员特权	QQ钱包 个性装扮 我的收藏 我的相册 我的文件
	|   |   |    |   |   └---底部 ===> 设置 (日间/晚间) 地理位置+温度
	|   |   |    |---middle =====> 联系人
	|   |   |    └---right =====> 添加 (进入新页面)
	|	|	|---主内容
	|	|	|   |---default
	|	|	|   |   |---搜索 (好友动态 文章 公众号)
	|	|	|   |   |---三图标(新朋友 群组 公众号)
	|	|	|   |   |	|------新朋友
	|	|	|   |   |	|------群组
	|	|	|   |   |	└------公众号
	|	|	|   |   |---我的设备
	|	|	|   |   |---手机通讯录
	|	|	|   |   |---我的好友列表 (好友组)
	|	|	|   |---添加
	|	|	|   |   |---找好友 (input 添加手机联系人 扫一扫添加好友 面对面发起多人聊天 按条件查找陌生人 查看附近的人)
	|	|	|   |   |---找群组 (input 热门分类 附近的群 群推荐 同城活动 兴趣部落)
	|	|	|   |   |---找公众号 (input 精品推荐)

	|	└---动态
	|		|--- 头部反馈
	|	|	|--- 头部反馈
	|   |   |    |---left
	|   |   |    |	 |---set 
	|   |   |    |   |   |---头部 ===> 二维码 图标 呢称 等级 个性签名
	|   |   |    |   |   |---内容 ===> 了解会员特权	QQ钱包 个性装扮 我的收藏 我的相册 我的文件
	|   |   |    |   |   └---底部 ===> 设置 (日间/晚间) 地理位置+温度
	|   |   |    |---middle =====> 动态
	|   |   |    └---right =====> 更多
	|	|	|--- 主内容
	|	|	|   |---default
	|	|	|   |   |---搜索 (搜索电影 音乐 商品)
	|	|	|   |   |---三图标(好友动态 附近 兴趣部落)
	|	|	|   |   |---我的动态组 (游戏 日迹 看点 京东购物 企鹅电竞 鹅漫U品 动漫 阅读 音乐 直播 应用宝 运动 吃喝玩乐 同城服务)
	|	|	|   |---更多
	|	|	|   |   |---已关闭的功能 
	|	|	|   |   |---已开启的功能 ===> 功能列表

	|---底部(foot)
	|   |---消息 
	|   |   |---新提示===>气泡+数字  
	|   |---联系人
	|   |   |---新提示===>气泡+数字
	|   |---动态	
	|   |   |---新提示===>气泡+数字

// 
	路径 文件匹配说明书


// 
	文件夹/文件说明书
	database 模仿后台数据库
		login.json 登录用户数据内容
		countries.json  国际地区中(cn)英(en)文名 简写(ad) 国际电话区号(word) 时差值(jl)
		messages.json   聊天信息
		contact.json    联系人信息 (含好友、群组)

	components 模板文件夹	
		com 公共小组件文件夹
		   alert.vue alert弹窗

		frame header footer组件   

		help help帮助页面组件

		portal 首页登录页面 

		registered	注册页面组件

		message 消息组件 

		contact 联系人


// 字体图标	

@font-face {
  font-family: 'iconfont';  /* project id 785273 */
  src: url('//at.alicdn.com/t/font_785273_hrsx6qwjcy7.eot');
  src: url('//at.alicdn.com/t/font_785273_hrsx6qwjcy7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_785273_hrsx6qwjcy7.woff') format('woff'),
  url('//at.alicdn.com/t/font_785273_hrsx6qwjcy7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_785273_hrsx6qwjcy7.svg#iconfont') format('svg');
}
添加颜色
	game			游戏&#xe64a;
	aspect		    看点&#xe611;
	classroom		腾讯课堂&#xe64e;
	sameService		同城服务&#xe61e;
	tableware		吃喝玩乐&#xe76f;
	tutoring        企鹅辅导&#xe630;
	music 			音乐&#xe613;
	reading 		阅读&#xe62e;
	sports  		运动 &#xe615;
	tenNews 		腾讯新闻&#xe61b;
	live 			直播 &#xe8ae;
	application		应用宝&#xe61d;
	clothing		鹅漫U品 &#xe65a;
	esports			电竞&#xe616;
	track     		足迹日迹&#xe677;
	shopping		购物&#xe60b;
	anime			腾讯动漫&#xe856;
/* Lv 等级分类*/
	.lvCrown,
	.lvSun,
	.lvMoon,
	.lvStars{
		font-family:"iconfont" important; 
	}
	.lvCrown::before{
		content:"\e65b";
	}
	.lvSun::before{
		content:"\e617";
	}
	.lvMoon::before{
		content:"\e619";
	}
	.lvStars::before{
		content:"\e618";
	}
	/*会话 输入框图标 6 图标 默认系统色 */
	.icon-face,.icon-maikefeng, .icon-shexiangji-, .icon-hongbao, .icon-xiangji, .icon-tupian{
	 	font-family:"iconfont" !important;
		font-size: 100%;
	 } 
	.icon-face::before{
		content:"\e653";表情
	}
	.icon-maikefeng::before{
		content:"\e61f"; 麦克风
	}
	 .icon-shexiangji::before{
	 	content:"\e61c"; 摄像机
	}
	 .icon-hongbao::before{
	 	content:"\e678";红包
	}
	 .icon-xiangji::before{
	 	content:"\e631";相机
	}
	.icon-tupian::before{
		content:"\e6d3";图片
	}

/** 会话四宫格图标 ***/
	.icon-cancelordercopy   转帐 	68ce12 
	.icon-shoucang 			收藏		4193f6 
	.icon-dianhua1 			电话		00c79b
	.icon-yinle1 			音乐		6ace14
	.icon-qiaoqiaohua 		悄悄话	09b9f5
	.icon-doudong 			抖动		529efe
	.icon-lianxiren 		推荐联系人 11b7f5
	.icon-hongbao1 			发红包	f15d5b
	.icon-wenjian1 			发文件	4393f6
	.icon-weizhi1 			发位置	ffa656
	.icon-shipin 			视频电话  00c79d

	<div class="zodiacItem">
		<svg class="icon-dianhua1" aria-hidden="true">
            <use xlink:href="#icon-dianhua1"></use>
        </svg>
		<span>QQ电话</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-shipin" aria-hidden="true">
            <use xlink:href="#icon-shipin"></use>
        </svg>
		<span>视频电话</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-shoucang" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
        </svg>
		<span>收藏</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-hongbao1" aria-hidden="true">
            <use xlink:href="#icon-hongbao1"></use>
        </svg>
		<span>发红包</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-wenjian1" aria-hidden="true">
            <use xlink:href="#icon-wenjian1"></use>
        </svg>
		<span>文件</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-doudong" aria-hidden="true">
            <use xlink:href="#icon-doudong"></use>
        </svg>
		<span>抖动</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-cancelordercopy" aria-hidden="true">
            <use xlink:href="#icon-cancelordercopy"></use>
        </svg>
		<span>转帐</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-yinle1" aria-hidden="true">
            <use xlink:href="#icon-yinle1"></use>
        </svg>
		<span>音乐</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-weizhi1" aria-hidden="true">
            <use xlink:href="#icon-weizhi1"></use>
        </svg>
		<span>发位置</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-lianxiren" aria-hidden="true">
            <use xlink:href="#icon-lianxiren"></use>
        </svg>
		<span>推荐联系人</span>
	</div>
	<div class="zodiacItem">
		<svg class="icon-qiaoqiaohua" aria-hidden="true">
            <use xlink:href="#icon-qiaoqiaohua"></use>
        </svg>
		<span>悄悄话</span>
	</div>
/**电话黄页图标**/

.icon-gonggongfuwu  				公共服务
.icon-daibancheliangbaoxian 		保险服务
.icon-kuaidi 						快递
.icon-lvyou  						旅游
.icon-yinhangqia 					银行
.icon-yiyuan 						医院
.icon-renyuanjietinglianjietianjia 	售后服务
.icon-99  							飞机(交通)

默认颜色
	weibiaoti       电话&#xe61a;
	telephone		电话&#xe63b;
	phoneBook		通讯录&#xe63a;
	back			返回&#xe612;
	pass			密码&#xe62f;
	set	    		设置&#xe693;
	group			群组&#xe610;
	day	    		日间&#xe680;
	Flicking 	    扫一扫&#xe6a3;
	Interest 		兴趣部落&#xe77b;
	search			搜索--1&#xe60d;
	collection		收藏&#xe60c;
	file			文件&#xe60f;
	wallet			钱包&#xe63e;
	palette			调色板&#xe671;	
	members			会员&#xe625;
	near			附近&#xe60a;
	bubbles			气泡&#xe609;
	star			星&#xe608;
	addDialog		添加对话_提示添加&#xe699;
	qrCode			二维码&#xe605;
	AddContact      添加联系人&#xe606;
	search			搜索&#xe60e;
	contact			联系人&#xe604;
	night			夜间&#xe603;
	photo 			相册&#xe6ba;
	coordinates		坐标&#xe600;
	thePublic		公众号&#xe614;	
	trends			好友动态&#xe602;
	friend			新朋友&#xe601;
				    qq&#xe607;
app
安卓：
720 x 1280尺寸的设计稿上，字体大小可选择为 24px 、28px 、32px 、36px
状态栏高度：50 px

导航栏、操作栏高度：96 px=48dp x 2

主菜单栏高度：96 px

内容区域高度：1038 px


IOS:
	640×960 的尺寸设计	字体大小可选择为 24px 、28px 、32px 、36px
 640×960 的尺寸设计，那我们就说说在这个尺寸下这些元素的尺寸：

状态栏：就是我们经常说的信号、运营商、电量等显示手机状态的区域，其高度为：40 px

导航栏：显示当前界面的名称，包含相应的功能或者页面间跳转的按钮，其高度为：88 px

主菜单栏：类似于页面的主菜单，提供整个应用的分类内容的快速跳转，其高度为：98 px

内容区域：展示应用提供的相应内容，整个应用中布局变更最为频繁的，其高度为：734 px=960-40-88-98





????????????????????????????????????????????????????????

src 下多建一个server 文件夹 做一个node web服务器 将聊天记录文件夹写在server下作文件夹的读取 写入 等操作











http://img2.imgtn.bdimg.com/it/u=438748448,138146478&fm=27&gp=0.jpg
http://img1.imgtn.bdimg.com/it/u=3360334596,3609678173&fm=27&gp=0.jpg
http://img2.imgtn.bdimg.com/it/u=2818774734,3989894358&fm=27&gp=0.jpg
http://img1.imgtn.bdimg.com/it/u=1108014211,3316557400&fm=27&gp=0.jpg
http://img1.imgtn.bdimg.com/it/u=2837372887,895021746&fm=27&gp=0.jpg
http://img2.imgtn.bdimg.com/it/u=2676993988,1870149218&fm=27&gp=0.jpg
http://img3.imgtn.bdimg.com/it/u=4251296610,3886694611&fm=27&gp=0.jpg
<template>
	<div class="yellowPages"> 
		<div class="yellowPageHead">
			<div class="yellowPageNavs">
				<a class="pathBack back l" v-on:click="closeComponent()"> 消息</a>
				<span> 电话黄页 </span>
				{{ childBoolean }}
			</div>
		</div>
		<div class="yellowPageBody">
			<div class="yellowPageSearch">
				<div class="addressToggle l" title="链接地区城市列表">成都</div>
				<div class="merchantSearch r">
					<a title="快递 公共服务搜索">
						<i class="search-1">中通快递</i>
					</a>
				</div>
			</div>
			<div class="yellowPageIconsNavs">
				<div class="yellowPageIconsNav" 
					v-for="(child,index) in yellowPageIconsNavs"
					v-bind:key="index"
				>
					<a>
						<span v-html="child.svg"></span>
						<span v-html="child.title"></span>
					</a>
				</div>
			</div>
			<div class="yellowPageHot">
				<h5>热门号码</h5>
				<ul class="yellowPageHotList">
					<li class="yellowPageHotItem" 
						v-for="(item,index) in yellowPageHotList"
						v-bind:key="index"
					>
						<a>
							<div class="pic l">
								<img v-bind:src="item.logo" />
							</div>
							<div class="txt l">
								<strong> {{ item.title }} </strong>
								<span> {{ item.serviceTel }} </span>
							</div>
							<div class="call r" title="点击启动呼叫界面">
								<svg class="icon-dianhua1" aria-hidden="true">
									<use xlink:href="#icon-dianhua1"></use>
								</svg>
							</div>
						</a>
					</li>
				</ul>
				<code>
        
			        申通快递电话
			        95543
			        
			        顺丰速运电话
			        95338
			        
			        韵达快递电话
			        95546
			        
			        圆通速递电话
			        95554
			        
			        中通速递电话
			        95311 / 4008-270-270
			        
			        EMS快递电话
			        11183
			        
			        天天快递电话
			        4001-888-888
			        
			        宅急送电话
			        400-6789-000
			        
			        德邦电话
			        95353
			        
			        百世快递快递电话
			        95320
			        
			        邮政包裹/挂号信
			        11183
			        
			        全峰快递电话
			        400-100-0001


					中国农业银行

					95599

					中国建设银行

					95533

					中国工商银行

					95588

					中国银行

					95566

					交通银行

					95559

					邮政储蓄银行

					95580

					招商银行

					95555

					兴业银行

					95561

					中信银行

					95558

					中国光大银行

					95595

					上海浦东发展银行

					95528

					中国民生银行

					95568

					深圳发展银行

					95501









					上海浦东发展银行

					95528 

					深圳发展银行

					95501

					民生银行

					95568 

					广东发展银行

					95508

					华夏银行

					95577







					中国平安保险

					 95511


					中国人寿保险

					 95519


					中国太平洋保险

					 95500


					中国太平人寿保险

					 95589


					中国人保保险

					 95518


					天安保险

					 95505


					大众保险

					 95507


					华泰财险

					 95509


					中华联合保险

					 95585


					华安财险

					 95556







					中国大地保险

					 95590


					安邦财险

					 95569


					泰康人寿保险

					 95522


					新华人寿保险

					 95567


					信诚人寿保险

					 65588598 
				</code>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props : {
			childBoolean:{
				type : Boolean,
				default : true
			}
		},
		data () {
			return {
				msg : "yellowPage",
				yellowPageIconsNavs:[
					{
						"id":"y_p_i_n_001",
						"title":"快递",
						"svg":`<svg class="icon-kuaidi" aria-hidden="true">
						            <use xlink:href="#icon-kuaidi"></use>
						        </svg>`,
				        "new":""
				    },
					{
						"id":"y_p_i_n_002",
						"title":"交通出行",
						"svg":`<svg class="icon-99" aria-hidden="true">
						            <use xlink:href="#icon-99"></use>
						        </svg>`,
				        "new":""
				    },
					{
						"id":"y_p_i_n_003",
						"title":"酒店旅游",
						"svg":`<svg class="icon-lvyou" aria-hidden="true">
						            <use xlink:href="#icon-lvyou"></use>
						        </svg>`,
				        "new":""
				    },
					{
						"id":"y_p_i_n_004",
						"title":"医院",
						"svg":`<svg class="icon-yiyuan" aria-hidden="true">
						            <use xlink:href="#icon-yiyuan"></use>
						        </svg>`,
				        "new":""
				    },
					{
						"id":"y_p_i_n_005",
						"title":"银行",
						"svg":`<svg class="icon-yinhangqia" aria-hidden="true">
						            <use xlink:href="#icon-yinhangqia"></use>
						        </svg>`,
				        "new":""
				    },
					{
						"id":"y_p_i_n_006",
						"title":"公共服务",
						"svg":`<svg class="icon-gonggongfuwu" aria-hidden="true">
						            <use xlink:href="#icon-gonggongfuwu"></use>
						        </svg>`,
				        "new":""
				    },
					{
						"id":"y_p_i_n_007",
						"title":"品牌售后",
						"svg":`<svg class="icon-renyuanjietinglianjietianjia" aria-hidden="true">
						            <use xlink:href="#icon-renyuanjietinglianjietianjia"></use>
						        </svg>`,
						"new":""
					},
					{
						"id":"y_p_i_n_008",
						"title":"保险证券",
						"svg":`<svg class="icon-daibancheliangbaoxian" aria-hidden="true">
						            <use xlink:href="#icon-daibancheliangbaoxian"></use>
						        </svg>`,
						"new":""
					}
				],
				yellowPageHotList:[
					{"id":"y_p_h_l_001","title":"申通快递","logo":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=885796395,3961214781&fm=26&gp=0.jpg","serviceTel":"95543","state":"","class":"E","new":""},
					{"id":"y_p_h_l_002","title":"顺丰速运","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536122385627&di=35b15ef04a63475b307a733dec29063c&imgtype=0&src=http%3A%2F%2Fwww.9669.com%2Fuploadfile%2F2017%2F0204%2F20170204031808338.jpg","serviceTel":"95338","state":"","class":"E","new":""},
					{"id":"y_p_h_l_003","title":"韵达快递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536122522212&di=80868c20b476e702a39a0b7aff07fe48&imgtype=0&src=http%3A%2F%2Fdown.51rc.com%2Fimagefolder%2FLogo%2FL10100000%2F10091532_b20170721135019.gif","serviceTel":"95546","state":"","class":"E","new":""},
					{"id":"y_p_h_l_004","title":"圆通速递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536122655296&di=ef0a1bf19e5230f49e224c650881563f&imgtype=0&src=http%3A%2F%2Fimages.pccoo.cn%2Fyp%2F2012412%2F20124128193495.jpg","serviceTel":"95554","state":"","class":"E","new":""},
					{"id":"y_p_h_l_005","title":"中通速递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536717583&di=6edd844ee656299ca5c9aafc1475ec2f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.5577.com%2Fup%2F2016-6%2F2016621112175546.png","serviceTel":"95311","state":"","class":"E","new":""},
					{"id":"y_p_h_l_006","title":"EMS快递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536122753133&di=1f1a15d46f12f83d093ecec954afd264&imgtype=0&src=http%3A%2F%2Fimg.ailaba.org%2Fimgg%2Fn%2FD2ABD3D1E8D04869AA1CF5061616A6D8.jpg","serviceTel":"11183","state":"","class":"E","new":""},
					{"id":"y_p_h_l_007","title":"天天快递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536122833309&di=1fc971598eb13e98f90f738348f08fd7&imgtype=0&src=http%3A%2F%2Fdown.51rc.com%2Fimagefolder%2FLogo%2FL10600000%2F10590895_b20170106113521.gif","serviceTel":"4001-888-888","state":"","class":"E","new":""},
					{"id":"y_p_h_l_008","title":"宅急送","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123001367&di=56810543fc3daf91e4844fc04cd6307b&imgtype=0&src=http%3A%2F%2Fbjw-a.oss-cn-shanghai.aliyuncs.com%2Fp1%2Fbig%2Fn_v1bkujjd6l27zvlipbdeiq.jpg","serviceTel":"400-6789-000","state":"","class":"","new":""},
					{"id":"y_p_h_l_009","title":"德邦物流","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123031126&di=50f582511b217748401c3ee1d7b9c5b3&imgtype=0&src=http%3A%2F%2Fwww.scxxjc.cn%2Fupload%2Fimg%2Fr9TYgdNLk9-w3hfPpivZPZTmc8sFsetfo31oGHIAUwxcSJu7b3g3JA7NY8XW9CT6K%2FeQEBiUncZlVFlwyFZjWtV%2FtzmV4r5qAdNEGg.jpg","serviceTel":"95353","state":"","class":"E","new":""},
					{"id":"y_p_h_l_010","title":"百世快递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123086423&di=c51c67fafa36533811d44363b904aa04&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fy1%2FM06%2F5F%2F3C%2FwKhQc1R7_XmEQwC_AAAAAB_teHk182.jpg..300x300.jpg","serviceTel":"95320","state":"","class":"E","new":""},
					{"id":"y_p_h_l_011","title":"邮政","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123110654&di=2974fe2efd64857e2689fb93ad3d31fe&imgtype=0&src=http%3A%2F%2F2.pic.paopaoche.net%2Fup%2F2016-1%2F201615141244.png","serviceTel":"11183","state":"","class":"E","new":""},
					{"id":"y_p_h_l_012","title":"全峰快递","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536718005&di=f04f69c1595e1e6488bfffdbe5fdd191&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140107%2F20140107150543-554158763.jpg","serviceTel":"400-100-0001","state":"E","class":"","new":""},
					{"id":"y_p_h_l_013","title":"中国农业银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123164682&di=0d1c4a9d2e0686a250534019bc8e53e7&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160728%2Fbba726502fc24cb79704016541bffc86_th.jpg","serviceTel":"95599","state":"","class":"H","new":""},
					{"id":"y_p_h_l_014","title":"中国建设银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123209145&di=ab99d0ac05079414859374dd25ee4d84&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1610%2F869-1610140Z924-51.jpg","serviceTel":"95533","state":"","class":"H","new":""},
					{"id":"y_p_h_l_015","title":"中国工商银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123238613&di=66f47c862ff33b0f3c018c2c7fdda476&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F3c14936719da9ba6.jpg","serviceTel":"95588","state":"","class":"H","new":""},
					{"id":"y_p_h_l_016","title":"中国银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123278442&di=58d1de717447f953cd7d5dbe8d795bac&imgtype=0&src=http%3A%2F%2Fhangzhou.zhaotie.com%2Fuploadpic%2F20127%2F201273142914826.JPG","serviceTel":"95566","state":"","class":"H","new":""},
					{"id":"y_p_h_l_017","title":"交通银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123312073&di=d10ba40eb80efeb90afd6a468594aa23&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F62%2F40%2F20300542878330141535405660832.jpg","serviceTel":"95559","state":"","class":"H","new":""},
					{"id":"y_p_h_l_018","title":"邮政储蓄银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123371058&di=c7ae10ad29d2aa4154fd26487da34bf9&imgtype=0&src=http%3A%2F%2F2.pic.paopaoche.net%2Fup%2F2016-1%2F201615141244.png","serviceTel":"95580","state":"","class":"H","new":""},
					{"id":"y_p_h_l_019","title":"招商银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123401348&di=4be0b6be292ae6da0238d2b2844547f9&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20130718%2F20130718143401-79864627.jpg","serviceTel":"95555","state":"","class":"H","new":""},
					{"id":"y_p_h_l_020","title":"兴业银行","logo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1648297669,2768685211&fm=26&gp=0.jpg","serviceTel":"95561","state":"","class":"H","new":""},
					{"id":"y_p_h_l_021","title":"中信银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123515690&di=2ebee99b5f7808bf848a4d945f6e6cd5&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20160711%2FzhongxinyinxingqiyeLOGO_6660855.jpg","serviceTel":"95558","state":"","class":"H","new":""},
					{"id":"y_p_h_l_022","title":"中国光大银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123668911&di=7d03492a5a1de78f2db43b66700856ac&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F02%2F03%2FFjfzLxJEM43ZwVT0xZT8gzgv23js.jpg%2521730x0.jpg","serviceTel":"95595","state":"","class":"H","new":""},
					{"id":"y_p_h_l_023","title":"上海浦东发展银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123742391&di=d4f2e6ef74da35354c91030adc2ab46d&imgtype=0&src=http%3A%2F%2Fimg.weixinyidu.com%2F150812%2F055f9387.jpg","serviceTel":"95528","state":"","class":"H","new":""},
					{"id":"y_p_h_l_024","title":"中国民生银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123766156&di=8c18debb97baf1558e9c77cce9f060cf&imgtype=0&src=http%3A%2F%2Fcdn2.image.apk.gfan.com%2Fasdf%2FPImages%2F2015%2F12%2F30%2Fldpi_1090262_2b75f1e9c-1375-48f1-be16-76a64e63d433.png","serviceTel":"95568","state":"","class":"H","new":""},
					{"id":"y_p_h_l_025","title":"深圳发展银行","logo":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1836589224,3942261382&fm=26&gp=0.jpg","serviceTel":"95501","state":"","class":"H","new":""},
		
					{"id":"y_p_h_l_029","title":"广东发展银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123846106&di=19e68565a28ad8fc7ba072a41e2f7520&imgtype=0&src=http%3A%2F%2Fwww.hbjyjj.com.cn%2Fupload%2Fimg%2FpYTf0YMYlYKw3hfPpivZMJb2bstT6PBS7HZ1Wz4GU0JSQJyzZm99JknueM2W9Fr7KvWXFQeVmd9nU1l3y1NuV7Ms4XrB4f0yH48FSU5t-i244dRF.jpg","serviceTel":"95508","state":"","class":"H","new":""},
					{"id":"y_p_h_l_030","title":"华夏银行","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123878051&di=79dea46c2489215078881367912fd5ad&imgtype=0&src=http%3A%2F%2Fwww.onlinedown.net%2Fzt%2Fas58%2Fimg%2F10.png","serviceTel":"95577","state":"","class":"H","new":""},
					{"id":"y_p_h_l_031","title":"中国平安保险","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123930201&di=42c30e7c62fc8f08101645f144a1ead6&imgtype=0&src=http%3A%2F%2Fwww.bx58.com%2Fuserfiles%2Falbum%2F3452%2F20150602%2F20150602110716_7047.jpg","serviceTel":"95511","state":"","class":"I","new":""},
					{"id":"y_p_h_l_032","title":"中国人寿保险","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123951919&di=3583eefa59f7c6835fa3c970d8a4f7d9&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft01f26829cdcf9ea5f5.gif","serviceTel":"95519","state":"","class":"I","new":""},
					{"id":"y_p_h_l_033","title":"中国太平洋保险","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536123985246&di=ad337a51951c87abf60a7c568c1819c0&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F92%2F63%2F01458PICPTN_1024.jpg","serviceTel":"95500","state":"","class":"I","new":""},
					{"id":"y_p_h_l_034","title":"中国太平人寿保险","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536124024177&di=2b2693d46b4483bf39c115cec5301812&imgtype=0&src=http%3A%2F%2Fcdn6.haitou.cc%2Fcompany%2Flogo%2F68%2F44368_05cf.png%3Fv%3D1473518048","serviceTel":"95589","state":"","class":"I","new":""},
					{"id":"y_p_h_l_035","title":"中国人保保险","logo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536124092516&di=3076377776a367c5820afbe0c29eebaf&imgtype=0&src=http%3A%2F%2Fcdn2.image.apk.gfan.com%2Fasdf%2FPImages%2F2016%2F1%2F19%2Fldpi_705616_2f372ea93-d648-413c-96c0-f9182314394c.png","serviceTel":"95518","state":"","class":"I","new":""}
				]
			}
		},
		methods : {
			closeComponent () {
				this.childBoolean = false 
				this.$emit('changeChildState',this.childBoolean)
			}
		}
	}
</script>
<style lang="scss">
	.yellowPages{
		width:100%;
		height:100%;
		position:fixed;
		z-index:20;
		top:0;
		bottom:0;
		background:white;
		.yellowPageHead{
			background:#11b7f3;
			height:5rem;
			text-align:center;
			line-height:3rem;
			padding:1.75rem 1rem 0;
			box-sizing:border-box;
			position:relative;
			color:white;
			font-size:1.25rem;
			&:before{
				content:"";
				height:4rem;
				width:100%;
				position:absolute;
				top:0;
				left:0;
				background:linear-gradient(to bottom,rgba(0,0,0,.25),rgba(0,0,0,0));
			}
			&:after{
				content:"";
				height:3rem;
				width:100%;
				position:absolute;
				bottom:0;
				left:0;
				background:linear-gradient(to top,rgba(255,255,255,.25),rgba(0,0,0,0));
			}
			.yellowPageNavs {
				position:absolute;
				z-index:10;
				width:calc(100% - 2rem);
				line-height:3rem;
				font-size:1.4125rem;
				.pathBack {
					line-height:3rem;
					font-size:1.25rem;
				}
			}
		}
		/*yellowPageHead end*/
		.yellowPageBody{
			overflow-y:auto;
		    height: calc(100% - 5rem);
			.yellowPageSearch{
				width:100%;
				overflow:hidden;
				padding:.5rem 1rem;
				display:flex;
				.addressToggle{
					line-height:2.6rem;
					padding:0 1.4rem 0 .6rem;
					position:relative;
					display: block;
    				flex-wrap: nowrap;
    				color:#767676;
					&:before{
						content:'';
						border:.5rem solid transparent;
						border-top:.6rem solid #cfcfcf ;
						border-bottom-width:0;
						position:absolute;
						right:0;
						top:1rem;
					}
					&:after{
						content:'';
						border:.5rem solid transparent;
						border-top:.6rem solid white;
						border-bottom-width:0;	
						position:absolute;
						right:0;
						top:calc(1rem - 2px);					
					}
				}
				.merchantSearch {
					flex-grow:1;
					padding:.25rem .75rem;
					box-sizing:border-box;
					a{
						display:block;
						border-radius:.5rem;
						background:#f3f3f3;
						text-align:center;
						color:#a5a5a5;
					}
				}
			}/* yellowPageSearch end*/
			.yellowPageIconsNavs{
				overflow:hidden;

				.yellowPageIconsNav{
					width:25%;
					float:left;
					padding:.8125rem 0;
					text-align:center;
					span{
						display:block;
						line-height:160%;
					}
					span:last-child{
						font-weight:bold;
					}
				}
			} /* navs end */
			.yellowPageHot {
				h5{
					padding:.5rem;
					background:#f3f3f3;
					color:#999;
				}
				li{
					border-bottom:1px solid #cfcfcf;
					overflow:hidden;
					padding:.75rem;
					.pic{
						width:4.5rem;
						height:4.5rem;
						img{
							width:100%;
							height:auto;
						}
					}
					.txt{
						padding-left:.5rem;
						strong{
							display:block;
							line-height:2.6rem;
							font-size:1.3125rem;
						}
						span{
							line-height:1.4rem;
							color:#999;
						}
					}
					.call{
						padding:.5rem;
					}
				}
			}
		}/* yellowPageBody end*/
	}
</style>
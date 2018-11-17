<template>
	<div id="Import" ref="Import">
		<div class="importInput" v-on:click="closeZodiac()">
			<div class="importMsg l" contenteditable="true">
				{{ msg }}
				<textarea id="importMsg" class="importMsg" type="text" v-model="msg"></textarea>  
			</div>
			<button class="btn r" 
				v-bind:class="msg ? 'btn-primary' : 'btn-default'"
				v-on:click="messageSend()"
			>发送</button>
		</div>
		<div class="importIconBtns">
			<div class="iconBtn l"><i class="icon-maikefeng" title="麦克风"></i></div>
			<div class="iconBtn l"><i class="icon-tupian" title="图片"></i></div>
			<div class="iconBtn l"><i class="icon-shexiangji" title="视频"></i></div>
			<div class="iconBtn l"><i class="icon-xiangji " title="照片"></i></div>
			<div class="iconBtn l"><i class="icon-hongbao " title="红包"></i></div>
			<div class="iconBtn l"><i class="icon-face " title="表情"></i></div>
			<div class="iconBtn l placeSwitch" title="四宫开关">
				<i 
					v-bind:class="childBoolean ? 'on' : 'off'" 
					v-on:click.stop="placeSwitch()"
					title="加号"
				></i>
			</div>
		</div>
		<div class="zodiac place" title="四宫(十二宫)" 
			v-show="childBoolean"
			v-bind:class="childBoolean ? 'placeShow' : 'placeHide' "
		>
			<v-touch class="v-touch" v-on:swipeleft="zodiacLeft()" v-on:swiperight="zodiacright()">
			<div class="zodiacArr">
				<div class="zodiacList" 
					v-for="(zodiacList,order) in zodiacArray" 
					v-bind:key="order"
					v-bind:class="'zodiacList-' + order"
					v-if="zodiacIndex ===order"
				>
					<div class="zodiacItem l" 
						v-for="(zodiac,index) in zodiacList.children" 
						v-bind:key="index"
					>
						<a href="" v-bind:title="zodiac.title">
							<i class="new" v-if="zodiac.new"></i>
							<span class="svgSpan" v-html="zodiac.svg"></span>
							<span class="txtSpan" v-html="zodiac.title"></span>
						</a>
					</div>	
				</div>
			</div>
			<div class="zodiacBtns">
				<span class="zodiacBtn" 
					v-for="(zodiacList,order) in zodiacArray" 
					v-bind:key="order"
					v-bind:class="zodiacIndex === order ? 'on' : ''"
					v-bind:title="zodiacList.id"
					v-on:click="setZodiacIndex(order)"
				>
				
				</span>
			</div>
			</v-touch>
		</div>
		
	</div>
</template>
<script>
import Vue from 'vue' 
	export default {
		props : {
			childBoolean : {   // 十二宫控制布尔值
				type : Boolean,
				default : false
			}
		},
		data () {
			return {
				msg : `央视网消息：近日，“感受改革巨变，思考中国奇迹——改革开放看江`,
				zodiacArray:[
					{
						"id":"001",
						"children":[
							{
								"id":"001",
								"title":"QQ电话",
								"svg":`<svg class="icon-dianhua1" aria-hidden="true">
						            <use xlink:href="#icon-dianhua1"></use>
						        </svg>`,
						        "new":""
						    },
							{
								"id":"002",
								"title":"视频电话",
								"svg":`<svg class="icon-shipin" aria-hidden="true">
						            <use xlink:href="#icon-shipin"></use>
						        </svg>`,
						        "new":""
							},
							{
								"id":"003",
								"title":"收藏",
								"svg":`<svg class="icon-shoucang" aria-hidden="true">
						            <use xlink:href="#icon-shoucang"></use>
						        </svg>`,
						        "new":"new"
							},
							{
								"id":"004",
								"title":"发红包",
								"svg":`<svg class="icon-hongbao1" aria-hidden="true">
						            <use xlink:href="#icon-hongbao1"></use>
						        </svg>`,
						        "new":""
							},
							{
								"id":"005",
								"title":"文件",
								"svg":`<svg class="icon-wenjian1" aria-hidden="true">
						            <use xlink:href="#icon-wenjian1"></use>
						        </svg>`,
						        "new":""
							},
							{
								"id":"006",
								"title":"抖动",
								"svg":`<svg class="icon-doudong" aria-hidden="true">
						            <use xlink:href="#icon-doudong"></use>
						        </svg>`,
						        "new":""
							},
							{
								"id":"007",
								"title":"转帐",
								"svg":`<svg class="icon-cancelordercopy" aria-hidden="true">
						            <use xlink:href="#icon-cancelordercopy"></use>
						        </svg>`,
						        "new":"new"
							},
							{
								"id":"008",
								"title":"音乐",
								"svg":`<svg class="icon-yinle1" aria-hidden="true">
						            <use xlink:href="#icon-yinle1"></use>
						        </svg>`,
						        "new":""
							}
						]
					},
					{
						"id":"002",
						"children":[
							{
								"id":"001",
								"title":"发位置",
								"svg":`<svg class="icon-weizhi1" aria-hidden="true">
						            <use xlink:href="#icon-weizhi1"></use>
						        </svg>`,
						        "new":""
							},
							{
								"id":"002",
								"title":"推荐联系人",
								"svg":`<svg class="icon-lianxiren" aria-hidden="true">
						            <use xlink:href="#icon-lianxiren"></use>
						        </svg>`,
						        "new":""
							},
							{
								"id":"003",
								"title":"悄悄话",
								"svg":`<svg class="icon-qiaoqiaohua" aria-hidden="true">
						            <use xlink:href="#icon-qiaoqiaohua"></use>
						        </svg>`,
						        "new":"new"
							}
						]
					}	
				],
				zodiacIndex : 0
			}
		},
		watch : {
			childBoolean (val,old) {
				var h 
				Vue.nextTick(() => {
					h = parseInt(getStyle(this.$refs.Import,"height"))
					this.$emit('getFootImportBoolean',val,h)
				})
				console.log('import 184' ,old , val)
			}
		},
		computed : {
		
		},
		methods : {
			placeSwitch () {
				this.childBoolean = !this.childBoolean	
			},
			messageSend () {  // 消息推送
				if (this.msg) {
					this.$emit('messagePush',this.msg)
					this.msg = ''
				} else {
					console.log("error")
				}
			},
			closeZodiac () { // 关闭十二宫
				this.childBoolean = false 
			},
			setZodiacIndex (order) {
				this.zodiacIndex = order
			},
			zodiacLeft () {
				this.zodiacIndex++
				if (this.zodiacIndex > this.zodiacArray.length - 1) {
					this.zodiacIndex = 0
				}
				console.log("zodiacLeft",this.zodiacIndex)
			},
			zodiacright () {
				this.zodiacIndex--
				if (this.zodiacIndex < 0) {
					this.zodiacIndex = this.zodiacArray.length - 1
				}
				console.log("zodiacright",this.zodiacIndex)
			}
		},
		mounted () {
			if (this.childBoolean) {
				console.log(this.$refs.Import.style.height)
			} else {
				console.log(this.$refs.Import.style.height)
			}
		}
	}
	

	var getStyle =  (obj,attr) => {
		if ( window.getComputedStyle) {
			return window.getComputedStyle(obj,null)[attr]
		} else {
			return obj.currentStyle[attr]
		}
	}

</script>
<style scoped>
#Import{
	background:#ecedf1;
}
.importInput{
	padding:.5rem 1rem;
	overflow:hidden;
	min-height:3.3125rem;
	position:relative;
}
.importInput div.importMsg{
	min-height:3.3125rem;
	width:calc(100% - 5.2rem);
	font-size:1.25rem;
	border-radius:.375rem;
	text-indent:.5rem;
	background:white;
	position:relative;
	max-height:16rem;
	overflow:hidden;	
}
textarea.importMsg{
	width:100%;
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;
	font-size:1.25rem;
	text-indent:.5rem;
	font-weight:500;
	color:#222;
}
.importInput .btn{ /* 150 108*/
	font-size:1.25rem;
	line-height:2rem;
	width:4.7rem;
	height:3.3125rem;
	box-sizing:border-box;
	padding:.6875rem 1.1rem;
	border-radius:.375rem;
	position:absolute;
	bottom:.5rem;
	right:1rem;
}
.importInput .btn:focus,.importInput .btn:hover{
	outline:0;
}
.importInput .btn-default{
	background:#dddee2;
	color:#f1f2f4;
}
.importInput .btn-primary{
	background:#11b7f5;
	color:white;
}
.importIconBtns{
	overflow:hidden;
	padding:.5rem 0;
}
.importIconBtns .iconBtn{
	width:calc(100% / 7);
	text-align:center;
}
.importIconBtns .iconBtn i {
	font-size:1.75rem;
	color:#7d8391;
	line-height:2rem;
}
.importIconBtns .iconBtn .icon-tupian,
.importIconBtns .iconBtn .icon-xiangji,
.importIconBtns .iconBtn .icon-face{
	font-weight:700;
}
.importIconBtns .iconBtn .icon-xiangji{
	font-size:1.5rem;
}
.importIconBtns .iconBtn .icon-hongbao{
	font-size:1.5rem;
}
.placeSwitch{
	height: 2rem;
    padding-top: .175rem;
    box-sizing: border-box;
}
.placeSwitch i::before,.placeSwitch i::after{
	position:absolute;
	content:"";
}
.placeSwitch i::before{
	width:1rem;
	height:.15rem;
	left:.225rem;
	top:.65rem;
}
.placeSwitch i::after{
	width:.15rem;
	height:1rem;
	top:.225rem;
	left:.65rem;
}
.placeSwitch i{
	width:1.75rem;
	height:1.75rem;
	border-radius:.875rem;
	box-sizing:border-box;
	display:inline-flex;
	position:relative;
	border-width:.15rem;
	border-style:solid;
}
.off::before,.off::after{
	background:#7d8391;
}
.off{
	border-color:#7d8391;
	background:white;
}
.on::before,.on::after{
	background:#fff;
}
.on{
	border-color:#11b7f5;
	background:#11b7f5;
}
/** 十二宫 **/

.zodiac{
	background:white;
	padding:1rem 0;	
	transition:all 2s ease;
	height:calc(100% - 7.31125rem);
	position:relative;
	box-sizing: border-box;
}
.placeShow{
	opacity:1;
}
.placeHide{
	opacity:0;
}
.zodiacArr{
	height: 100%;
    width: 100%;
    overflow: hidden;
}
.zodiacList{

}
.zodiacItem{
	width:25%;
	text-align:center;
	margin-bottom:.125rem;
	position:relative;
} 
.zodiacItem .new{
	width:1rem;
	height:1rem;
	border-radius:.5rem;
	background:#f64d30;
	position:absolute;
	top:.2rem;
	right:1rem;
}
.zodiacItem span{
	display:block;
	padding:.85rem 0;
}
.zodiacItem .txtSpan{
	color:#626262;
	padding-top:.5125rem;
	font-size:1.15rem;
}
.zodiacBtns{
	text-align:center;
	position:fixed;
	left:0;
	bottom:1rem;
	right:0;
}
.zodiacBtns span{
	width:.8rem;
	height:.8rem;
	border-radius:.4rem;
	display:inline-flex;
	background:#cfcfcf; /* a1a1a1 */
	margin:0 .4rem;
}
.zodiacBtns .on{
	background:#a1a1a1;
}
</style>
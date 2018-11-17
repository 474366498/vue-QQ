<template>
	<div class="messagePalette">
		<div class="messagePaletteHead">
			<div class="messagePletteNavs">
				<a class="pathBack back l" v-on:click="back()"> 消息({{ messageIndex }})</a>
				<a class="userName">{{ messageList[messageIndex].name }}</a>
				<i class="user r" v-on:click="viewInformation()"></i>
				<i class="weibiaoti r" v-on:click="openVoice()" title="打开语音聊天方式"></i>
			</div>
		</div>
		<div class="messagePaletteBody meetingRoom" v-on:click="closeFootImport()" v-bind:style="'bottom:calc(' + footHeight + 'px +' + ' .5rem)'">
			<div class="dialogueList">
				<ul ref="dialogueUl">
					<li class="dialogueItem" 
						v-for="(item,index) in messageText"
						v-bind:key="index"
						v-bind:class="item.origin=== 'm' ? 'dialogueMy' : 'dialogOther' "
					>
						<div class="dialogueInf r" v-if="!(item.origin === 'm'||item.origin === 'y') ? true : false ">
							<span class="u" title="帐号"> {{ item.origin }} </span>
							<span class="d" title="时间"> {{ item.date | formatting }} </span>
						</div>

						<div class="dialoguePic" 
							v-bind:class="item.origin === 'm' ? 'r' : 'l' "
						>
							<a v-bind:title="item.origin === 'm' ? '指向自己帐号的个人装饰' : '指向对方帐号的个人详细页面' "><img v-bind:src="item.origin === 'm' ? 'http://img.qq1234.org/uploads/allimg/140808/19103WP5-10.jpg' : item.origin === 'y' ? item.pic : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=913652751,1950005416&fm=26&gp=0.jpg' " /></a>
						</div>
						

						<div class="dialogueTxt" v-bind:class="item.origin === 'm' ? 'r' : 'l' " v-bind:style="item.text.length < 2 ? 'text-align:center' : 'text-align:left' ">
							{{ item.text }}
						</div>
					</li>
				</ul>
			</div>
			<code> {{ messageText }} </code>
			{{ messageIndex }}
			{{ footHeight }}
		</div>
		<div class="messagePaletteFoot" v-bind:style="'height:'+ footHeight + 'px'">
			<foot-import 
				v-bind:childBoolean="footImportBoolean"
				v-on:getFootImportBoolean = "getFootImportBoolean"
				v-on:messagePush = "messageNew"
			></foot-import>	
		</div>
	</div>
</template>

<script>
import footImport from '../com/import.vue'

	export default {
		props : {
			messageList : {
				type : Array ,
				default : () => {}
			},
			messageIndex : {
				type : Number ,
				default : () => 0
			}
		},
		data () {
			return {
				msg:"messagePalette.vue",
				footImportBoolean:false,
				footHeight:''
			}
		},
		computed : {
			messageText () {
				return this.messageList[this.messageIndex].messageText
			}
		},
		beforeRouteEnter (to,from,next) {
			next((vm) => {
				console.log(vm.$route.path)
			})
		},
		methods : {
			getFootImportBoolean (bool,num) {
				this.footImportBoolean = bool
				this.footHeight = num
				if ( this.footImportBoolean) {
					this.$refs.dialogueUl.style = 'position: absolute;bottom: 0;'
				} else {
					this.$refs.dialogueUl.style = 'position: static;bottom: 0;'
				}
				//console.log('messagePalette 53',bool,num)
			},
			messageNew (str) {
				let messageNew = {
					"origin": "m",
				    "text": str,
				    "date": new Date().getTime()
				}
				this.messageText.push(messageNew)
				//console.log(messageNew,this.messageList[this.messageIndex])
			},
			closeFootImport () {  // 关闭 foot 十二宫格
				if (this.footImportBoolean) {
					this.footImportBoolean = false 
				}
				//console.log('messagePalette 53',this.footImportBoolean )	
			},
			//头部返回 语音 个人信息
			back () {
				if (window.history.length <= 1 ) {
					this.$router.push({path:'/message'})
					return false
				} else {
					this.$router.go(-1)
				}
				console.log(window.history.length)
			},
			openVoice () {
				alert("dialog 打开语音聊天界面")
			},
			viewInformation () {
				alert("查看对方信息内容")
			}
		},
		mounted () {
			console.log(this.messageList)
		},
		components : {
			footImport
		}
	}
</script>

<style lang="scss">
	.messagePalette{
		position:fixed;
		width:100%;
		height:100%;
		top:0;
		z-index:11;
		background:white;
		.messagePaletteHead{
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
			.messagePletteNavs{
				position:absolute;
				z-index:10;
				width:calc(100% - 2rem);
				.pathBack {
					line-height:3rem;
					font-size:1.25rem;
				}
				.userName{
					width:40%;
					height:3rem;
					position:absolute;
					left:30%;
					text-align:center;
					text-overflow:ellipsis;
					white-space:nowrap;
					overflow:hidden;
				}
				.user,.weibiaoti{
					line-height:3rem;
					font-size:1.5rem;
					padding-left:1.25rem;
				}
				.weibiaoti{
					font-size:1.75rem;
				}
			}
		}
		/* Head end*/
		.messagePaletteBody{
			position:absolute;
			top:5rem;
			left:0;
			right:0;
			bottom:7.3125rem;
			overflow:hidden;
			.dialogueList{
				width:100%;
				height:100%;
				padding:.5rem 1rem;
				background:#eeedf2;
				box-sizing:border-box;
				overflow-y:auto;
				ul{
					.dialogueItem {
						width:100%;
						display:inline-block;
						padding:.55rem 0;
						.dialogueInf {
							width:calc(100% - 4rem);
							font-size:.8125rem;
							color:#999;
							line-height:1.24rem;
							span:first-child{
								margin-right:1.5rem;
							}
						}
						.dialogueInf ~ .dialoguePic{
							margin-top:.5rem;
						}
						.dialoguePic{
							width: 2.8rem;
						    height: 2.8rem;
						    border-radius: 1.4rem;
						    border: 1px solid #eee;
						    -webkit-box-sizing: border-box;
						    box-sizing: border-box;
						    overflow: hidden;
						    img{
								width:100%;
								height:auto;
							}
						} /*item pic end */
						
						.dialogueTxt{
							min-height:2.4rem;
							max-width:60%;
							min-width:3rem;
							padding:.5rem; 
							line-height:1.4rem;
							box-sizing:border-box;
							&.l{
								background:white;
								border-radius:0 .5rem .5rem;
								border:1px solid #cecece;
								margin-left:.8rem;
								position:relative;
								&:before,&:after{
									content:"";
									border:.5rem solid transparent;
									display:inline-block;
									position:absolute;
									top:.4rem;
								}
								&:before{
									border-right:.6rem solid #cecece;		
									border-left-width:0;
									left:-0.6rem;
								}
								&:after{
									border-right:.6rem solid white;
									border-left-width:0;
									left:-0.55rem;
								}
							} 
							&.r{
								background:#3ab6fe;
								border-radius:.5rem 0 .5rem .5rem;
								border:1px solid #0fa9ff;
								margin-right:.8rem;
								color:white;
								position:relative;
								&:before,&:after{
									content:"";
									border:.5rem solid transparent;
									display:inline-block;
									position:absolute;
									top:.4rem;
								}
								&:before{
									border-left:.6rem solid #0fa9ff;		
									border-right-width:0;
									right:-0.6rem;
								}
								&:after{
									border-left:.6rem solid #3ab6fe;
									border-right-width:0;
									right:-0.55rem;
								}
							} 
						}/*item txt end */
					}
				}
			}
		}
		/*Body end*/
		.messagePaletteFoot{
			position:absolute;
			bottom:0;
			left:0;
			right:0;
			min-height:7.31125rem;
		}
	}

	
</style>
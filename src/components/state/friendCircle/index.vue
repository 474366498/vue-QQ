<template>
	<div class="friendCircle"> 
		<div class="friendCircleHead">
			<div class="friendCircleNavs">
				<a class="pathBack back l" v-on:click="goBack()">动态</a>
				好友动态
				<i class="add addFriendCircle r"></i>
			</div>
		</div>
		<div class="friendCircleBody">
			<div class="friendCircleTop friendCircleUser">
				<div class="vip"> 
					<div class="via"> <!-- 头像-->
						<img src="http://img.qq1234.org/uploads/allimg/140808/19103WP5-10.jpg" />
					</div>
					<div class="vipAisle"> <!--vip开通通道-->
						<svg class="zuanshi icon-zuanshi" aria-hidden="true">
							<use xlink:href="#icon-zuanshi"></use>
						</svg>
						<i class="jewel">开通</i>  <!--vip分类-->
					</div>
				</div>
				<div class="pageView">
					<div class="icon-eye l">
						<i class="eye"></i>
					</div>
					<div class="txt l">
						<p>今日访客<span class="num"></span></p>
						<p>总浏览量<span class="num"></span></p>
					</div>
				</div>
				<div class="friendCircleMenu">
					<div class="friendCircleItem l" v-for="(item,index) in menus" v-bind:key="index">
						<a> {{ item.title }} </a>
					</div>
				</div>
			</div>
			<div class="friendCircleList">
				暂无内容
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg : 'friendCircle',
				menus : [
					{"id":"m_001","title":"相册"},
					{"id":"m_002","title":"说说"},
					{"id":"m_003","title":"个性化"},
					{"id":"m_004","title":"小游戏"},
					{"id":"m_005","title":"消息"}
				]
			}
		},
		methods : {
			goBack () {
				console.log(window.history)
				if (window.history.length < 1) {
					this.$router.push('/state')
				} else {
					this.$router.go(-1)
				}
			}
		}
	}
</script>
<style lang="scss">
	.friendCircle{
		width:100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		background:white;
		z-index:20;
		.friendCircleHead{
			background:#11b7f3;
			height:5rem;
			text-align:center;
			line-height:3rem;
			padding:1.75rem 1rem 0;
			box-sizing:border-box;
			position:absolute;
			width:100%;
			top:0;
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
			.friendCircleNavs {
				position:absolute;
				z-index:10;
				width:calc(100% - 2rem);
				line-height:3rem;
				font-size:1.4125rem;
				.pathBack {
					line-height:3rem;
					font-size:1.25rem;
				}
				.addFriendCircle {
					margin:.5rem;
					width:2rem;
					height:2rem;
					display:inline-block;
					border-radius:50%;
					border:.2rem solid white;
					position:relative;
					box-sizing:border-box;
					&:before{
						content:'';
						width:.15rem;
						height:1rem;
						top:.3rem;
						display:inline-block;
						background:white;
						position:absolute;
					}
					&:after{
						content:'';
						width:1rem;
						height:.15rem;
						left:.35rem;
						top:.725rem;
						display:inline-block;
						background:white;
						position:absolute;
					}
				}
			}
		} /** friendCircleHead end **/
		.friendCircleBody{
			position:absolute;
			width:100%;
			height:100%;
			top:0;
			background:url(https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/skin/431.jpg?2) no-repeat top center;
			background-size:cover;
			.friendCircleTop {
				min-height:45%;
				padding:0 2rem;
				box-sizing:border-box;
				position:relative;
				.vip{
					width:7.5rem;
					height:7.5rem;
					position:absolute;
					bottom:6rem;
					.via{
						width:6rem;
						height:6rem;
						position:absolute;
						left:.75rem;
						top:0;
						border-radius:3rem;
						overflow:hidden;
						z-index:1;
						img{
							width:100%;
							height:auto;
						}
					}
					.vipAisle{
						height:4rem;
						width:6rem;	
						position:absolute;
						left:.75rem;
						bottom:.5rem;
						border-radius:3rem;
						overflow:hidden;
						&:before{
							content:"";
							height:8rem;
							width:100%;
							border-radius:0 0 100% 100%;
							display:block;
							background:#ff8520;
							position:absolute;
							bottom:0;
						}
						.icon-zuanshi{
							position:absolute;
							left:.5rem;
							bottom:-.2rem;
							z-index:11;
							height:2.6rem;
							width:2.6rem;
						}
						.jewel{
							width:4rem;
							height:1.8125rem;
							line-height:1.3125rem;
							position:absolute;
							left:1.5rem;
							bottom:.2rem;
							z-index:10;
							padding-left:1.25rem;
							font-size:.8715rem;
							box-sizing:border-box;
							color:#656565;
							font-style:normal;
							background:#dcdadb;
							border-radius:0 .9rem .9rem 0;
							border:.2rem solid white;
						}
					}
					
				} /** vip end**/
				.pageView{
					position:absolute;
					bottom:7rem;
					right:2rem;
					.icon-eye{
						width:3rem;
						height:3rem;
						background:#ffbd00;
						border-radius:50%;
						position:relative;
						box-shadow:0 .1rem 3px rgba(0,0,0,.3);
						&:before{
							content:'';
							width:1.6875rem;
							height:1.25rem;
							position:absolute;
							left:calc((3rem - 1.6875rem) / 2);
							top:calc((3rem - 1.25rem) / 2);
							border-radius:100%;
							display:inline-block;
							background:white;
							box-shadow:0 .1rem 3px rgba(0,0,0,.15);
						}
						.eye{
							width:.625rem;
							height:.625rem;
							position:absolute;
							left:calc((3rem - .625rem) / 2);
							top:calc((3rem - .625rem) / 2);
							border-radius:100%;
							background:#faba00;
							&:before{
								content:'';
								width:.2rem;
								height:.2rem;
								border-radius:100%;
								position:absolute;
								left:calc((.625rem - .2rem) / 3 * 2);
								top:calc((.625rem - .2rem) / 3 );
								background:white;
							}
						}
					}
				}
				.friendCircleMenu{
					position:absolute;
					bottom:0;
					width:100%;
					height:5rem;
					left:0;
					padding-top:2rem;
					box-sizing:border-box;
					background:linear-gradient(to top,rgba(0,0,0,.3),rgba(0,0,0,0));
					.friendCircleItem{
						width:20%;
						line-height:2.8125rem;
						color:white;
						text-align:center;
					}
				}
			}
			.friendCircleList{
				min-height:55%;
				background:white;
			}
		}
	}
</style>
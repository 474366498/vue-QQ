<template>
	<div class="Contact">
		<transition name="fade" mode="out-in">
			<router-view v-show="!show"></router-view>
		</transition>
		<div title="index 主内容" v-show="show">
			<div class="searchLink">
				<a href="/searchLink" title="好友动态 文章 公众号">
					<i class="search-1">搜索</i>
				</a>
			</div>
			<nav-icon-tabs 
				v-bind:pathF="pathF" 
				v-bind:lists="tabItems"
			></nav-icon-tabs>
			<div class="contactList">
				<!--    手机通讯录 我的设备-->
				<div class="contactConcern">
					<div class="friendConcern">
						<div class="friendGroup">
							<div class="friendGroupHead">
								<i></i>
								<a>特别关心</a>
								<span>计数 count</span>
							</div>
							<div class="friendGroupMain">
								<ul>
									<li><a><div class="friendPic l"><img src="http://img5.imgtn.bdimg.com/it/u=4195669573,1549192832&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 安静 </strong> <p>是否在线 个性签名</p></div></a></li><li><a><div class="friendPic l"><img src="http://img5.imgtn.bdimg.com/it/u=2264178625,294111034&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 冬冬 </strong> <p>是否在线 个性签名</p></div></a></li><li><a><div class="friendPic l"><img src="http://img1.imgtn.bdimg.com/it/u=324720517,1299190938&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 钟友英 </strong> <p>是否在线 个性签名</p></div></a></li><li><a><div class="friendPic l"><img src="http://img1.imgtn.bdimg.com/it/u=3802316899,3047972932&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 都国旗 </strong> <p>是否在线 个性签名</p></div></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="groupCommon">
						<div class="friendGroup">
							<div class="friendGroupHead">
								<i></i>
								<a>常用群聊</a>
								<span>计数 count</span>
							</div>
							<div class="friendGroupMain">
								<ul>
									<li><a><div class="friendPic l"><img src="http://img4.imgtn.bdimg.com/it/u=3770822735,1599095895&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 小红妹妹 </strong> <p>是否在线 个性签名</p></div></a></li><li><a><div class="friendPic l"><img src="http://img4.imgtn.bdimg.com/it/u=4029704378,2954671206&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 踏雪无痕 </strong> <p>是否在线 个性签名</p></div></a></li><li><a><div class="friendPic l"><img src="http://img3.imgtn.bdimg.com/it/u=3332169919,4217272020&amp;fm=27&amp;gp=0.jpg"></div> <div class="friendInfo l"><strong> 小洪哥 </strong> <p>是否在线 个性签名</p></div></a></li>
								</ul>
							</div>	
						</div>
					</div>
				</div>

				<div class="friendList">
					<div class="friendGroup" 
						v-for="(item ,index) in friendList"
						v-bind:key="index"
					>
						<div class="friendGroupHead"
							v-on:click="changeFolder(index)">
							<i v-bind:class="item.unfold ? 'active':''"></i>
							<a> {{ item.squad }} </a>
							<span>计数 count</span>
						</div>
						<div class="friendGroupMain" v-show="item.unfold">
							<ul>
								<li 
									v-for="(el,order) in item.children"
									v-bind:key="order">
									<a> 
										<div class="friendPic l">
											<img v-bind:src="el.pic" />
										</div>
										<div class="friendInfo l">
											<strong> {{ el.name }} </strong>
											<p>是否在线 个性签名</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- {{ friendList }} -->
		</div>
	</div>
</template>
<script>
import navIconTabs from '../com/navIconTabs.vue' 
	export default {
		created () {
			this.axios.get('/myserver/contact')
				.then((res) => {
					let contact = res.data.data
					//console.log(contact)
					this.friendList = contact.F
					this.groupList = contact.G
				})
				.catch((req) => {
					console.log('contact',req)
				})
		},
		data () {
			return {
				msg : " contact.vue",
				pathF :'',
				tabItems:[
					{"id":"1","href":"/friend","icon":"friend","text":"新朋友"},
					{"id":"2","href":"/group","icon":"group","text":"群聊"},
					{"id":"3","href":"/public","icon":"thePublic","text":"公众号"}
				],
				friendList : [],
				groupList : [],
				show:true
			}
		},
		methods :{
			init () {
				let path = this.$route.path
				this.pathF = path.split('/')[1]
				//console.log(path.split('/')[2])
				if ( path.split('/')[2] !== undefined) {
					this.show = !this.show
					//console.log('22222',this.show)
				}
			},
			changeFolder (i) {
				this.friendList[i].unfold = !this.friendList[i].unfold
			}
		},
		beforeRouteEnter (to,from,next) {
			next(vm => {
				// console.log(vm.$route.path)
			})	
		},
		mounted () {
			this.init()
		},
		components :{
			navIconTabs
		}
	}
</script>
<style lang="scss">
.contactList{
	background:#ededed;
}
.contactList > div {
	margin-top:.5rem;
	background:white;
}
.friendGroup{
	
}
.friendGroupHead{
	padding:.5rem;
	background:white;
}
.friendGroupHead{
	border-bottom:1px solid #ececec;
}
.friendGroupHead i{
	border:.4rem solid transparent;
	border-left:.5rem solid #999;
	display:inline-table; 
}
.friendGroupHead i.active{
	border:.4rem solid transparent;
	border-top:.5rem solid #999;
	display:inline-table; 
}
.friendGroupHead a , .friendGroupHead span{
	line-height:2.5rem;
}
.friendGroupHead a {
	font-size:1.2rem;
	font-weight:300;
	color:black;
}
.friendGroupHead span{
	font-size:.85rem;
	float:right;
	color:#666;
}

.friendGroupMain li{
	background:#f9f9f9;
	padding:.5rem;
	overflow:hidden;
	border-bottom:1px solid #ececec;
}
.friendGroupMain li .friendPic {
	width:4rem;
	height:4rem;
	border-radius:2rem;
	border:1px solid white;
	display:block;
	overflow:hidden;
}
.friendGroupMain li .friendPic img{
	width:100%;
	height:auto;
}
.friendGroupMain li .friendInfo{
	padding-left:.8rem;
}
.friendGroupMain li .friendInfo strong{
	line-height:2.5rem;
	font-size:1.25rem;
}
.friendGroupMain li .friendInfo p{
	color:#777;
	font-size:.85rem;
}
</style>
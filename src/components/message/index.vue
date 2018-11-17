<template>
	<div class="message"> 
		<router-view v-bind:messageList="messageList" v-bind:messageIndex="messageIndex"></router-view>
		<div class="searchLink">
			<a href="message/searchLink" title="好友动态 文章 公众号">
				<i class="search-1">搜索</i>
			</a>
		</div>
		<div class="messageMain">
			<div class="messageList" v-if="!show">
				<ul>
					<li 
						v-for="(item,index) in messageList"
						v-bind:key="index"
						v-on:click="setMessageState(index)"
					>
						<router-link tag="a" 
							v-bind:to="{path:rootPath+'/'+item.id}"
						>
							<div class="contactPic l">
								<img v-bind:src="item.pic" />		
							</div>
							<div class="messageInfo l">
								
									<p>
										<span class="userName">{{ item.name }}</span>
										<span class="date">{{ item.messageText[item.messageText.length-1].date | formatting }}</span>
									</p>	
									<p>
										<span class="messageText"> {{ item.messageText[item.messageText.length-1].text }} </span>
										<span class="messageState"
											v-show="item.state < 1 ? false : true" 
											v-html="item.state<10 ? item.state :'9<sup>+</sup>'"
											v-bind:class="item.state<10 ? 'odd' :'even'"
										> {{ item.state }} </span>
									</p>
							</div>
						</router-link>
					</li>
				</ul>
				<!-- {{ contactList }} -->
				{{ messageList[0] }}
			</div>
			<div v-if="show">
				<!-- <div>
					电话黄页 (link 其它页面)
				
						定位select   search 搜索
				
						《快递 交通出行 酒店旅游 医院 银行 公共服务 品牌售后 保险证券》
				
						热门号码 
							图标 title 短号 电话图标
				</div>
				<div>
					通讯录 (link 其它页面)
					
					多人通讯录
				
				</div> -->
				<div class="talkList">
					<ul>
						<li 
							v-for="(item,index) in talkList"
							v-bind:key="index"
							v-bind:title="item.component"
							v-on:click="setTalkDefault(index)"
						>
							<a>
								<div class="icon l"><i v-bind:class="item.icon" ></i></div>
								<div class="title l"><h4> {{ item.title }} </h4></div>
								<span class="arrows r"></span>
							</a>
						</li>
					</ul>
				</div>

				<div class="moral">
					<div class="moralBack">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535351838177&di=db10ead71aeeaa97d3b8475748e43656&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F42%2F00%2F07W58PICbtY_1024.png" alt="" />
					</div>
					<div class="moralPer">
						<div 
							v-for="(item,index) in messageList"
							v-bind:key="index"
							v-if="index<4 ? show : !show"
							v-bind:class="'person person-' + index % 4"
						>
							<div class="pic"><img v-bind:src="item.pic" /></div>
							<span class="arrows"></span>
						</div>
							
					</div>
					<h2> 他们都在使用QQ电话噢 </h2>
				</div>
				<div class="wannaTalk"><a href="/message/wanna">找人聊聊</a></div>
			</div>
		</div>
		<div name="childrenComponents" >
			<children-yellow-page 
				v-if="childrenYellowPageShow" 
				v-bind:childBoolean="childrenYellowPageShow"
				v-on:changeChildState="closeChildrenYellowPage"
			></children-yellow-page>
			<children-address-book 
				v-if="childrenAddressBookShow"
				v-bind:childBoolean="childrenAddressBookShow"
				v-on:changeChildState="closeChildrenAddressBook"
			></children-address-book> 
		</div>
	</div>
</template>
<script>
import Bus from '../../bus.js' // 数据bus传输
import Vue from 'vue'
import childrenYellowPage from './yellowPage/index.vue'
import childrenAddressBook from './addressBook/index.vue'
	export default {
		created () {
			this.axios.get('myserver/contact')
				.then((res) => {
					//this.contactList = res.data.data
					var lists = res.data.data
					var F = [] 
					var G = []
					lists.F.forEach( (obj,index) => {
						obj.children.forEach((object,i) => {
							F.push(object)
						})
					})
					lists.G.forEach((obj,index) => {
						G.push(obj)
					})
					this.contactList.push(F,G)
					//console.log(this.contactList)
				})
				.catch((err) => {
					console.log('message',err)
				})
			this.axios.get('myserver/message')
				.then((res) => {
					this.messageList = res.data.data
					this.messageList.forEach((obj,i) => {
						if (obj.property === 'F') {
							this.contactList[0].forEach((object,index) => {
								if (object.id === obj.id){
									for (var key1 in object) {
										obj[key1] = object[key1]
									}
									for (let l = 0; l < obj.messageText.length; l++) {
										for (var key2 in object) {
											if (obj.messageText[l].origin !== "m") {
												obj.messageText[l][key2] = object[key2]
											}
										}
									}	
								}
							})
						} else {
							this.contactList[1].forEach((object,index) => {
								if (object.id === obj.id) {
									for (var key in object) {
										obj[key] = object[key]
									}
								}
							})
						}
					})
					var messageState = 0 
					this.messageList.forEach((obj,index) => {
						if (obj.state ) {
							messageState += Number(obj.state)
						}
					})
					//this.messageState = messageState
					Bus.$emit('messageLength',messageState)
					console.log(this.messageList[3])
				})
				.catch((err) => {
					console.log('message',err)
				})	
		},
		data () {
			return {
				contactList:[],
				messageList:[],
				messageIndex:0,
				rootPath:'',
				talkList:[
					{"id":"001","icon":"telephone","title":"电话黄页","component":"childrenYellowPage"},
					{"id":"002","icon":"phoneBook","title":"通讯录","component":"childrenAddressBook"}
				],
				show:false,
				childrenYellowPageShow:false,
				childrenAddressBookShow:false
			}
		},
		beforeRouteEnter (to,from,next) {
			next(vm => {
				vm.talkList.forEach((o,i) => {
					o.href = vm.$route.path + o.href
				})
				vm.rootPath = vm.$route.path
				console.log(vm.$route.path)
			})
		},
		computed : {
			
		},
		methods : {
			setMessageState (index) {  // 点击进入message子路由 清零行为
				let l = this.messageList[index].state 
				this.messageIndex = index
				this.messageList[index].state = 0 
				Bus.$emit("messageLength",l)
			},
			setTalkDefault (index) { // 黄页 通讯录选择
				if (index) {
					this.childrenAddressBookShow = !this.childrenAddressBookShow
				} else {
					this.childrenYellowPageShow = !this.childrenYellowPageShow
				}
			},
			closeChildrenYellowPage (bool) {
				this.childrenYellowPageShow = bool 
			},
			closeChildrenAddressBook (bool) {
				this.childrenAddressBookShow = bool
			}
		},
		mounted () { 
			Bus.$on('messageTab',(data) => {
				this.show = data 
				console.log('tabNum',data)
			})
			//this.messageLength()
		},
		components : {
			childrenYellowPage,
			childrenAddressBook
		}
	}

	Vue.filter('formatting',(val) => {
		var V = new Date().getTime()
		var d = 24 * 60 * 60 * 1000
		var date = Number(val)
		if (V - date < d / 24) {
			return Math.ceil((V - date) / 1000 / 60) + '分钟之前' 
		} else if (V - date < d) {
			if (new Date(date).getDate() !== new Date(V).getDate()) {
				return '昨天'
			} else {
				return (new Date(date).getHours() >= 10 ? new Date(date).getHours() : '0' + new Date(date).getHours())  + ':' + (new Date(date).getMinutes() >= 10 ? new Date(date).getMinutes() : '0' + new Date(date).getMinutes())
			}
		} else if (V - date < 5 * d) {
			var day = new Date(date).getDay()
			switch (day) {
				case 0:
					day = '星期日'
					break
				case 1:
					day = '星期一'
					break
				case 2:
					day = '星期二'
					break
				case 3:
					day = '星期三'
					break	
				case 4:
					day = '星期四'
					break
				case 5:
					day = '星期五'
					break
				case 6:
					day = '星期六'
					break
			}
			return day
		} else if (V - date < 30 * d) {
			return (new Date(date).getMonth() + 1) + '-' + new Date(date).getDate()
		} else if (V - date < 365 * d) {
			return new Date(date).getFullYear() + '-' + (new Date(date).getMonth() + 1) + '-' + new Date(date).getDate()
		} else {
			return new Date(date).getFullYear()
		}
	})

</script>

<style>
.messageMain{
	padding:1rem 0;
	background:white;
}	
.messageMain .messageList li{
	padding:1rem 1rem 1rem .5rem;
	overflow:hidden;
	border-bottom:1px solid #ececec;
}
.messageMain .messageList li .contactPic{
	width:4rem;
	height:4rem;
	border-radius:2rem;
	border:1px solid #eee;
	box-sizing:border-box;
	overflow:hidden;
}
.messageMain .messageList li .contactPic img{
	width:100%;
	height:auto;
}
.messageMain .messageList li .messageInfo{
	width:calc(100% - 4rem);
	padding-left:.8rem;
	box-sizing:border-box;
}
.messageMain .messageList li .messageInfo p:first-child{
	line-height:2.2rem;
	width:100%;
	height:2.2rem;
	display:block;
}
.messageMain .messageList li .messageInfo p:last-child{
	line-height:1.8rem;
	width:100%;
	height:1.8rem;
	display:block;
}
.messageMain .messageList li .messageInfo p .userName{
	float:left;
	font-size:1.25rem;
	font-weight:500;
	color:black;
}
.messageMain .messageList li .messageInfo p .date{
	float:right;
	color:#999;
}
.messageMain .messageList li .messageInfo p .messageText{
	float:left;
	color:#666;
	max-height:1.8rem;
	max-width:calc(100% - 4rem);
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.messageMain .messageList li .messageInfo p .messageState{
	float:right;
	padding:0 .6rem ;
	background:red;
	color:white;
	border-radius:1rem;
}
.messageMain .messageList li .messageInfo p .messageState.even{
	padding-left:.75rem;
}
.messageMain .messageList li .messageInfo p .messageState sup{
	line-height:.75rem;
	font-size:.75rem;
}

.messageMain .talkList li{
	padding:.5rem;
	overflow:hidden;
	border-bottom:1px solid #ececec;
}
.messageMain .talkList li .icon , .messageMain .talkList li .title{
	line-height:4rem;
	min-width:4rem;
}
.messageMain .talkList li .icon > i {
	font-size:3rem;
	line-height:4rem;
}
.messageMain .talkList li .icon > i.telephone{
	color:#f4ea2a;
}
.messageMain .talkList li .icon > i.phoneBook{
	color:skyblue;
}
.messageMain .talkList li .title{
	color:#222;
}
.messageMain .talkList li span::before, .messageMain .talkList li span::after{
	position:absolute;
	content:'';
	border:.8rem solid transparent;
	border-left:1rem solid #999;
	top:1.2rem;
}
.messageMain .talkList li span::before{
	right:0;
} 
.messageMain .talkList li span::after{
	right:.2rem;
	border-left-color:white;
}
.messageMain .talkList li span{
	width:4rem;
	height:4rem;
	display:inline-block;
	position:relative;
	background:;	
}

.moral{
	position:relative;
	overflow:hidden;
}
.moralBack{
	padding:1rem 2rem;
	box-sizing:border-box;
	width:60%;
	margin:0 auto;
}
.moralBack img{
	width:100%;
	height:auto;
}
.moralPer{
	position:absolute;
	top:1rem;
	left:20%;
	bottom:4rem;
	right:20%;
}

.moralPer .person{
	position:absolute;
}
.moralPer .person-0{
    width: 3.4rem;
    height: 3.4rem;
}
.moralPer .person-1{
	width: 4.4rem;
    height: 4.4rem;
	right:0;
}
.moralPer .person-2{
	width: 4.1rem;
    height: 4.1rem;
	bottom:0;
}
.moralPer .person-3{
	width: 3.8rem;
    height: 3.8rem;
	right:0;
	bottom:0;
}
.moralPer .person .pic::before{
	content:'';
	width:100%;
	height:100%;
	position:absolute;
	border-radius:50%;
	border:.2rem solid white;
	box-sizing:border-box;
	left:0;
	top:0;
}
.moralPer .person .pic{
	width:100%;
	height:100%;
	border-radius:50%;
	border:1px solid red;
	overflow:hidden;
	position:relative;
}
 
.moralPer .person .arrows{
	width:100%;
	height:100%;
	display:block;
	background:red;
	position:absolute;	
}
.moralPer .person-0 .arrows::before{
	content:'';
	border:.5rem solid transparent;
	border-right:0;
	border-left:.6rem solid red;
	display:inline-block;
	position:absolute;
	right:-0.6rem;
	top:calc(50% - .5rem);
}
.moralPer .person-0 .arrows::after{
	content:'';
	border:.5rem solid transparent;
	border-right:0;
	border-left:.6rem solid white;
	display:inline-block;
	position:absolute;
	right:calc(-.6rem + 1px);
	top:calc(50% - .5rem);
}
.moralPer .person-0 .arrows{
	position:absolute;
	bottom:0;
	right:0;
	background:transparent;
	transform:rotate(45deg);
}
.moralPer .person-1 .arrows::before{
	content:'';
	border:.5rem solid transparent;
	border-left:0;
	border-right:.6rem solid red;
	display:inline-block;
	position:absolute;
	left:-0.6rem;
	top:calc(50% - .5rem);
}
.moralPer .person-1 .arrows::after{
	content:'';
	border:.5rem solid transparent;
	border-left:0;
	border-right:.6rem solid white;
	display:inline-block;
	position:absolute;
	left:calc(-.6rem + 1px);
	top:calc(50% - .5rem);
}
.moralPer .person-1 .arrows{
	position:absolute;
	bottom:0;
	left:0;
	background:transparent;
	transform:rotate(-45deg);
}
.moralPer .person-2 .arrows::before{
	content:'';
	border:.5rem solid transparent;
	border-right:0;
	border-left:.6rem solid red;
	display:inline-block;
	position:absolute;
	right:-0.6rem;
	top:calc(50% - .5rem);
}
.moralPer .person-2 .arrows::after{
	content:'';
	border:.5rem solid transparent;
	border-right:0;
	border-left:.6rem solid white;
	display:inline-block;
	position:absolute;
	right:calc(-0.6rem + 1px);
	top:calc(50% - .5rem);
}
.moralPer .person-2 .arrows{
	position:absolute;
	top:0;
	right:0;
	background:transparent;
	transform:rotate(-45deg);
}
.moralPer .person-3 .arrows::before{
	content:'';
	border:.5rem solid transparent;
	border-left:0;
	border-right:.6rem solid red;
	display:inline-block;
	position:absolute;
	left:-0.6rem;
	top:calc(50% - .5rem);
}
.moralPer .person-3 .arrows::after{
	content:'';
	border:.5rem solid transparent;
	border-left:0;
	border-right:.6rem solid white;
	display:inline-block;
	position:absolute;
	left:calc(-.6rem + 1px);
	top:calc(50% - .5rem);
}
.moralPer .person-3 .arrows{
	position:absolute;
	top:0;
	left:0;
	background:transparent;
	transform:rotate(45deg);
}

.moralPer .person img{
	width:100%;
	height:auto;
	display:block;
}
.moralPer + h2{
	color:skyblue;
	text-align:center;
	padding:.5rem;
}
.wannaTalk{
	text-align:center;
	padding:.5rem 3rem ;
}
.wannaTalk a{
	padding:.5rem 5rem;
	max-height:2.4rem;
	border:1px solid #cecece;
	color:black;
	display:inline-block;
	border-radius:.5rem;
}
</style>
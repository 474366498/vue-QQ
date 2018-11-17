<template>
	<div id="apiSecondary">
		<api-secon-head v-bind:items="lists"></api-secon-head>
		<main class="apiSeconMain">
			<div class="contactGroupTab">
				<div class="contactGroupItem" 
					v-for="(str,index) in contactGroupTabs"
					v-bind:key="index"
					v-bind:class="{'active':index===groupTabIndex}" 
					v-on:click="changeGroupTabIndex(index)"
				>{{ str }}</div>
			</div>
			<div class="contactGroupSearch">
				<a title="调用dialog" v-on:click="openDailog">
					<i class="search-1">搜索</i>
				</a>
			</div>
			<div class="contactGroupCont">
				<div 
					v-for="(item,index) in groupList" 
					v-bind:key="index" 
					v-if="index===groupTabIndex"
				>
					<h5>{{ item.title}} ( {{ item.main.length }} )</h5>
					<div v-if="item.main.length!==0">
						<ul>
							<li v-for="(it,order) in item.main" v-bind:key="order">
								<a>
									<div class="groupPic l"><img v-bind:src="it.pic" /></div>
									<div class="groupInfo l">
										<p v-text="it.name"></p>
										<span>我是 {{ it.id }}</span>
									</div>
									<div class="r verify">通过验证</div>
								</a>
							</li>
						</ul>
					</div>
					<div style="text-align:center;" v-if="item.main.length===0">
						<a class="addDialog">添加多人聊天</a>
					</div>
				</div>
			</div>
			<!-- <code>{{ groupList }}</code>  -->
		</main>
		<div class="searchDialog" v-show="Dialog"> 
			<div class="Search">
				<input class="l" type="text" name="searchText" placeholder="搜索" v-model="DialogSearch" />
				<a class="r" v-on:click="closeDialog">取消</a>
			</div>
			<div class="DialogResult" v-if="DialogSearch">
				{{ DialogSearch }}
			</div>
		</div>
		<!-- 
		<div class="apiSeconMain">
			<h5>好友通知</h5>
			<ul>
				<li v-for="(item,index) in friendList" v-bind:key="index">
					<a>
						<div class="friendPic l"><img v-bind:src="item.pic" /></div>
						<div class="friendInfo l">
							<p v-text="item.name"></p>
							<span>我是 {{ item.id }}</span>
						</div>
						<div class="r verify">通过验证</div>
					</a>
				</li>
			</ul> 
			<code>{{ groupList }}</code> 
		</div>-->
		
	</div>
</template>

<script>
import apiSeconHead from '@/components/frame/secondary/header.vue'
	export default {
		created () {
			this.axios.get('/myserver/contact')
				.then((res) => {
					let contact = res.data.data
					this.groupList[0].main = contact.G
				})
				.catch((req) => {
					console.log('contact/children/index',req)
				})
		},
		data () {
			return {
				msg : "friendSequence.vue",
				lists : [
					{"id":"s1","href":"/" + this.$route.path.split('/')[1],"icon":"l back","text":""},
					{"id":"s2","href":"","icon":"","text":"我的交友群"},
					{"id":"s3","href":"./add","icon":"r","text":"添加"}
				],
				contactGroupTabs:['我的群组','多人聊天'],
				groupList : [
					{"title":"群组通知","main":[]},
					{"title":"多人聊天","main":[]}
				],
				groupTabIndex:0,
				Dialog:false,
				DialogSearch:"",
				romArr : []
			}
		},
		methods : {
			changeGroupTabIndex (num) {
				this.groupTabIndex = num
			},
			openDailog () {
				this.Dialog = true
			},
			closeDialog () {
				this.Dialog = false
			}
		},
		components : {
			apiSeconHead
		}
	}

	/*function sort (arr,boolean) {
	    for (var i = 0; i < arr.length - 1; i++) {
	        for (var j = 0; j < arr.length - i - 1; j++){
	            if (!boolean) {
	            	if (arr[j] > arr[j + 1]) {
		                var hand = arr[j]
		                arr[j] = arr[j + 1]
		                arr[j + 1] = hand
		            }
	            } else {
	            	if (arr[j] < arr[j + 1] ) {
		            	hand = arr[j]
		            	arr[j] = arr[j + 1]
		            	arr[j + 1] = hand
		            }
	            }
	        }
	    }
	    return arr
	}*/
</script>
<style>
#apiSecondary{
	position: fixed;
	top: 0;
	bottom: 0;
	width:  100%;
	z-index: 11;
	background: wheat;
}
.apiSeconMain{
	overflow-y: auto;
    height: calc(100% - 5rem);
}
.contactGroupTab{
	height:4rem;
}
.contactGroupTab .contactGroupItem::before{
	content:'';
	width:50%;
	height:.25rem;
	background:red;
	position:absolute;
	bottom:-1px;
	display:none; 
}
.contactGroupTab .contactGroupItem:first-child::before{
	right:1rem;
}
.contactGroupTab .contactGroupItem:last-child::before{
	left:1rem;
}
.contactGroupTab .contactGroupItem.active::before{
	display:block;
}
.contactGroupTab .contactGroupItem{
	width:50%;
	float:left;
	line-height:3.6rem;
	padding-left:2rem;
	box-sizing:border-box;
	position:relative;
	border-bottom:1px solid #ccc;
}
.contactGroupTab .contactGroupItem:first-child{
	text-align:right;
	padding-right:2rem;
}

.contactGroupSearch {
	padding:.5rem;
}
.contactGroupSearch a{
	width: 100%;
    display: inline-block;
    background: white;
    text-align: center;
    color: #999;
    border-radius: .5rem;
    border: 1px solid #ddd;
    -webkit-box-shadow: 0px 0px 2px #ccc;
    box-shadow: 0px 0px 2px #ccc;
}




.apiSeconMain h5{
	text-indent: 1rem;
	line-height: 2rem;
}
.apiSeconMain ul li{
	padding:.75rem 1rem;
	overflow: hidden;
	box-sizing: border-box;
	border-bottom:1px solid #efefef;
	background: white;
}
.apiSeconMain ul li .groupPic{
	width:4rem;
	height: 4rem;
	border-radius:2rem;
	overflow: hidden;
	border:1px solid #ccc;
}
.apiSeconMain ul li .groupPic img{ 
	width:4rem;
	height: auto;
}
.apiSeconMain ul li .groupInfo{
	max-width:calc(100% - 4rem - 6rem);
	padding-left:1.5rem;
	box-sizing: border-box;
}
.apiSeconMain ul li .groupInfo p{
	line-height: 2.5rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: #333;
    overflow: hidden;
    height: 2.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.apiSeconMain ul li .groupInfo span{
	color:#999;
	line-height: 1.5rem;
	overflow: hidden;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.apiSeconMain ul li .verify{
	line-height: 4rem;
	color:#999;
}
.addDialog{
	padding:1rem .5rem;
	border-radius:.5rem;
	border:1px solid rgba(255,255,255,.25);
	background:#18B4ED;
	margin:5rem 1.5rem 0 1.5rem;
	display:block;
	color:white;
	letter-spacing:.15rem;
	font-size:1.25rem;
}
.searchDialog {
	position:fixed;
	top:0;
	width:100%;
	height:100%;
	background:rgba(0,0,0,.25);
}
.Search {
	padding:.5rem 1.5rem;
	background:white;
	overflow:hidden;
	border-bottom:1px solid #eee;
}
.Search input[type="text"]{
	width:calc(100% - 4rem);
	height:2.5rem;
	text-indent:.25rem;
	border:1px solid #efefef;
	border-radius:.5rem;
}
.Search a{
	height:2.5rem;
	line-height:2.5rem;
	color:#18B4ED;
}
.DialogResult{
	height:calc(50%);
	background:white;
	text-align:center;
}
</style>
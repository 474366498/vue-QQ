<template>
	<div id="apiSecondary">
		<api-secon-head v-bind:items="lists"></api-secon-head>
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
						<div class="r verify"> 
							<span v-if="item.diplomaticTime !==''">通过验证</span>  
							<button 
								v-if="item.diplomaticTime ===''" 
								v-on:click="friendAgree()" 
								class="default"
							>同意</button> 
							<button 
								v-if="item.diplomaticTime ===''" 
								v-on:click="friendAgree()" 
								class="info"
							>忽略</button>
						</div>
					</a>
				</li>
			</ul>
			<!-- <code>{{ friendList }}</code> -->
		</div>
	</div>
</template>

<script>
import apiSeconHead from '@/components/frame/secondary/header.vue'
	export default {
		created () {
			this.axios.get('/myserver/contact')
				.then((res) => {
					let contact = res.data.data
					//console.log(contact)
					var tempFriends = []
					contact.F.forEach((o,i) => {
						o.children.forEach((obj,index) => {
							tempFriends.push(obj)
						})
					})
					var temp = []
					var tLent = Math.ceil(tempFriends.length / 5 ) 
					var max = tempFriends.length
					for (var i = 0; i < tLent; i++){
						let rom = Math.ceil(Math.random() * max)
						let flg = true
						temp.forEach((o,j) => {
							if (rom === o) {
								flg = false
							}
						})
						/*for ( var j = 0 ; j <= temp.length; j++ ) {
							if(rom === temp[j]) {
								flg = false
								break
							}
						}*/
						if (flg) {
							temp.push(rom)
						} else {
							i--
						}
					}
					contact.U.forEach((obj,i) => {
						this.friendList.push(obj)
					})
					sort(temp).forEach((Num,i) => {
						this.friendList.push(tempFriends[Num])
					})
					
					console.log(sort(temp),this.friendList)
					//console.log(this.friendList)
					//this.friendList = contact.F
					//this.groupList = contact.G
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
					{"id":"s2","href":"","icon":"","text":"新朋友"},
					{"id":"s3","href":"./add","icon":"r","text":"添加"}
				],
				friendList : [],
				romArr : []
			}
		},
		methods : {
			friendAgree () {
				console.log('agree')
			} 
		},
		components : {
			apiSeconHead
		}
	}

	function sort (arr,boolean) {
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
	}
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
.apiSeconMain ul li .friendPic{
	width:4rem;
	height: 4rem;
	border-radius:2rem;
	overflow: hidden;
	border:1px solid #ccc;
}
.apiSeconMain ul li .friendPic img{ 
	width:4rem;
	height: auto;
}
.apiSeconMain ul li .friendInfo{
	max-width:calc(100% - 4rem - 6rem);
	padding-left:1.5rem;
	box-sizing: border-box;
}
.apiSeconMain ul li .friendInfo p{
	line-height: 2.5rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: #333;
    overflow: hidden;
    height: 2.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.apiSeconMain ul li .friendInfo span{
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
.apiSeconMain ul li .verify button{
	padding:.5rem .7rem;
	color:white;
	border-radius:.5rem;
	margin:0 .15rem;
}
.apiSeconMain ul li .verify .default{
	background:#337ab7;
}
.apiSeconMain ul li .verify .info{
	background:#5bc0de;	
}
</style>
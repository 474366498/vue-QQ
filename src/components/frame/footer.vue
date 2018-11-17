<template>
	<div id="foot" class="foot">
		<div class="appBar">
			<div class="navItem" 
				v-for="(item,index) in appBar"
				v-bind:key="index"
			>
				<a v-bind:href="item.link" >
					<i class="navIcon" v-bind:class="$route.path.indexOf(item.link) !== -1 ? 'active ' + item.icon : item.icon"></i>
					<span v-bind:class="$route.path.indexOf(item.link) !== -1 ? 'active' : '' "> {{ item.text }} </span>
					<i class="bubbleBall" 
						v-if="item.length" 
						v-text="item.length < 99 ? item.length : '99+'"
						v-bind:class="item.length < 10 ? 'one' : item.length < 99 ? 'two' :'' "
					></i>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import Bus from '../../bus.js'
//import Vue from 'vue'
	export default {
		created () {
			this.axios.get('/myserver/message')
				.then((res) => {
					let unreadMessages = res.data.data
					let length = 0
					unreadMessages.forEach((obj) => {
						length += Number(obj.state)
					})
					this.appBar[0].length = length
				})
				.catch((err) => {
					console.log(err)
				})
			this.axios.get('/myserver/contact')
				.then((res) => {
					let unknownContact = res.data.data.U  // 未知联系人(临时会话 好友申请)
					this.appBar[1].length = unknownContact.length
				})
				.catch((err) => {
					console.log(err)
				})
			// 	star 朋友圈  Friendster
		},
		props: {
			
		},
		data () {
			return {
				appBar :[
		          {"id":"1","icon":"bubbles","text":"消息","link":"message","length":""},
		          {"id":"2","icon":"contact","text":"联系人","link":"contact","length":""},
		          {"id":"3","icon":"star","text":"动态","link":"state","length":""}
		        ]
			}
		},
		methods : {
			
		},
		mounted () {
			Bus.$on('messageLength',(length) => {
				this.appBar[0].length = this.appBar[0].length - length
				console.log('不应该用bus获取 而应该一加载页面就向后台请求 获取, 当子组件内有所改变时再通过bus 重新计算')
			})
		}
	}
</script>
<style>
#foot{
	border-top:1px solid #eee;
	background:white;
	box-sizing:border-box;
}
#foot,.appBar{
	height:100%;
}
	.navItem{
		width:33.33%;
		float:left;
		padding:.5rem 0 0;
		position:relative;
		text-align:center;
	}
	.navIcon::before{
		color:#555;
		padding-left:0;
	}
	.navIcon{
		font-size:1.75rem;
		font-style:normal;
		display:block;
		text-align:center;	
	}
	.navItem span{
		font-size:1rem;
		text-align:center;
		display:block;
		color:#333;
	}
	span.active,.active::before{
		color:skyblue;	
	}
	.bubbleBall{
		position:absolute;
	    padding: .15rem .35rem;
	    background: red;
	    color: white;
	    border-radius: 1rem;
	    left:calc(50% + 2rem);
	    top:.5rem;
	    font-style:normal;
	}
	.bubbleBall.two{
		padding: .15rem .55rem;
	}
	.bubbleBall.one{
		padding: .2rem .55rem;
	}
</style>
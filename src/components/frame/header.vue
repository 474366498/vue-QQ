<template>
	<div id="head" class="head">
		<div class="l"
			v-bind:class="'head'+item.for" 
			v-for="(item,index) in appNavs"
			v-bind:key="index"
		>
			<div v-if="!item.main && item.for ==='Left'"> 
				<i 
					v-bind:class="item.icon !==''?'icon '+item.icon :'iconText'" 
					v-bind:title="item.title"
					v-on:click="apiPushHand() "
				> 
				</i> 
			</div>
			<div v-if="!item.main && item.for ==='Right'"> 
				<i 
					v-bind:class="item.icon !==''?'icon '+item.icon :'iconText'" 
					v-text="item.title"
					v-bind:title="item.title"
					v-on:click="openAppDialog() "
				> 
				</i> 
			</div>

			<div v-if="item.main">
				<ul v-bind:class="item.main.length===1?'onlyOne':'notOnly'">
					<li 
						v-for="(child,order) in item.main"
						v-bind:key="order"
						v-bind:class="order== flg ? 'active':''"
						v-on:click="changeFlg(order)"
					>
						<a>	{{ child.title }} </a>
					</li>
				</ul>
			</div>
		</div>

		<code v-if="!msg">
			{{ appNavs }}
		{{ msg }} <br/> {{ num }} <br/> {{ numShift }} <br/> {{ numE }}</code>
	</div>
</template>
<script>
import Bus from '../../bus.js'
	export default {
		props : {
			apiPushHandBoolean : {
				type : Boolean ,
				default : false 
			}
		},
		created () {
		},
		data () {
			return {
				msg :'head.vue',
				num : '1041.6111',
				flg : '0'
			}
		},
		computed : {
			appNavs () {
				var Navs
				if (this.$route.path.indexOf('message') !== -1) { // 消息
					Navs = [   // set 改成个人的头像
						{'for':'Left','icon':'userPic','state':false,'component':'dialog',"title":"个人头像"},
						{		
							'for':'Middle',
							'main':[
								{'for':'middle','title':'消息','link':'/message','default':true},
								{'for':'middle','title':'通话','link':'/message/phone','default':false}
							]
						},
						{'for':'Right','icon':'addDialog','state':false,'component':'dialog'}
					]
				} else if (this.$route.path.indexOf('contact') !== -1) {
					Navs = [
						{'for':'Left','icon':'userPic','state':false,'component':'dialog',"title":"个人头像"},
						{'for':'Middle','main':[{'title':'联系人','link':'','default':true}]},
						{'for':'Right','icon':'','title':'添加','state':false,'component':'link','link':''}
					]
				} else if (this.$route.path.indexOf('state') !== -1) {
					Navs = [
						{'for':'Left','icon':'userPic','state':false,'component':'dialog',"title":"个人头像"},
						{'for':'Middle','main':[{'title':'动态','link':'','default':true}]},
						{'for':'Right','icon':'','title':'更多','state':false,'component':'link','link':''}
					]
				}
				return Navs
			},
			numShift () {
				var e = 100
				var l = Math.ceil(Math.log(e) / Math.LN10)
				var reslut
				var $f , $s
				var arr = []
				var temps = this.num.split('.')
				for (var i = 0; i < temps.length; i++) {
					arr.push(temps[i])
				}
				if (arr.length < 2) {
					$f = arr[0]
					$s = 'E' + l
				} else {
					$f = arr[0]
					if ( arr[1].length < l) {
						$s = arr[1]
						for (var o = 0; o < l - arr[1].length; o++) {
							$s += '0'
							console.log("for",$s)
						}
					} else {
						 $s = arr[1].slice(0,l) + '.' + arr[1].slice(l,arr[1].length)
					}
				}
				reslut = Number($f + $s)
				return reslut
			},
			numE () {
				return Number(this.num + 'E2')
			}
		},
		watch : {
			/*appNavs (val,old) {
				console.log(val)
				console.log(old)
			},
			flg (val,old) {
				console.log(val)
				console.log(old)
			}*/
		},
		methods : {
			changeFlg (num) {
				this.flg = num 
				Bus.$emit('messageTab',this.flg)
			},
			apiPushHand () {
				this.childBoolean = true 
				this.$emit('changeAppDialog',this.childBoolean)
			},
			openAppDialog () {
				if (this.$route.name === '消息') {
					console.log("dialog")
				} else {
					console.log('this.$router.push(new history)')
				}
				console.log('openAppDialog')
			}
		}
	}
	
	//alert(Math.log(10000)/Math.LN10   )

</script>
<style>
	#head{
		height:100%;
		background:#11B4F5;
		border-bottom:1px solid #79CADE;
		padding:1rem 0;
		box-sizing:border-box;
	}
	.headLeft {
		width:20%;
		padding-left:.5rem;
		box-sizing:border-box;
	}
	.headMiddle {
		width:60%;
		text-align:center;
	}
	.headRight {
		width:20%;
		text-align:right;
		padding-right:.5rem;
		box-sizing:border-box;
	}
	#head >div>div{
		height:2.5rem;
		box-sizing: border-box;
	}

	#head >div>div .userPic{
		width:2.5rem;
		height:2.5rem;
		display:inline-block;
		background:url(http://img.qq1234.org/uploads/allimg/140808/19103WP5-10.jpg) no-repeat center;
		background-size:cover;
		border-radius:50%;
		box-shadow:0px 0px 3px white;
		border:1px solid rgba(255,255,255,.6);
		box-sizing:border-box;
	}
	.headMiddle > div {
		padding:.15rem 0;
	}
	.headMiddle ul.notOnly li{
		width:5rem;
		line-height:2.2rem;
		display:inline-grid;
		border:.15rem solid white;
		box-sizing:border-box;
	}
	.headMiddle ul.onlyOne li{
		line-height:2.5rem;
		color:white;
		font-size:1.25rem;
	}
	.headMiddle ul.notOnly li:nth-child(2n-1){
		border-radius:1.25rem 0 0 1.25rem;
		border-right-width:0;
	}
	.headMiddle ul.notOnly li:nth-child(2n){
		border-radius:0 1.25rem 1.25rem 0;
		border-left-width:0;
	}
	.headMiddle ul.notOnly li.active{
		background:white;
	}
	.headMiddle ul li a{	
		color:white;
	}
	.headMiddle ul.notOnly li.active a{
		color:#56CBF1;
	}
	#head >div>div .icon::before{
		color:white;
	}
	#head >div>div .icon {
		font-size:2rem;
		line-height:2.5rem;
	}
	#head >div>div .iconText {
		line-height:2.5rem;
		font-style:normal;
		font-size:1.25rem;
		color:white;
	}
</style>
<template>
	<div id="portal">
		<div class="portalBg">
			<div class="portalPic">
				<img src="http://wp1.sina.cn/woriginal/636e6e2egw1e3xlbsdoj7g210p10pnpg.gif" />
			</div>
			<div class="portalForm">
				<form action="portal_submit" method="post" accept-charset="utf-8" v-on:submit.prevent="submit">
					<p><label class="user" for="user"></label><input id="user" name="user" type="text" placeholder="请输入用户名" v-model="ruleForm.user" /></p>
					<p><label class="pass" for="pass"></label><input id="pass" name="pass" type="password" placeholder="请输入用户密码" v-model="ruleForm.pass" /></p>
					<p>
						<span class="l"><input type="checkbox" name="" />自动登录</span>
						<span class="r"><input type="checkbox" name="" v-model="checked" />记住密码</span>
					</p>
					<p><input type="submit" value="登 录" /></p>
					
				</form>
			</div>
			<div class="portalLink">
				<router-link v-bind:to="{path:'help',query:{}}" class="l">help</router-link>
				<router-link v-bind:to="{path:'registered',query:{}}" class="r">注册</router-link>
			</div>
		</div>
		<!--  -->
	</div>
</template>
<script>

	export default {
		data () {
			return {
				msg : " portal.vue ",
				checked:true,
				ruleForm :{
					user:'',
					pass:''
				}
			}
		},
		methods :{
			submit () {
				let user = this.ruleForm.user 
				let pass = this.ruleForm.pass
				if ( user === '' || user == null) {
					alert("请输入正确的用户名")
					return
				}  else if (pass === '' || pass == null) {
					alert("请输入正确的密码")
					return
				} 

				if (this.checked) {
					this.setCookie(user,pass,7)
				}
				var url = '/myserver/login'
				console.log(this,'在build后无法跳转至主内容页面')
				this.axios.post(url,this.ruleForm,{emulateJSON:true})
					.then(res => {
						var serverLogin = res.data.data
						for (var s = 0; s < serverLogin.length; s++) {
							if (serverLogin[s].user !== user) {
								console.log("user not find")
								return 
							} else {
								if (serverLogin[s].pass !== pass) {
									console.log("password ins error")
								} else {
									this.$router.push({path:'/api'})
								}
							}
						}
					})
					.catch((error) => {
						console.log(error.response)
					})

				/*if(this.user !=="" && this.pass !=="") {
					return this.$router.push({path:"/api",query:{use:this.user}})
				}*/
			},
			setCookie (user,pass,days) {
				var exdate = new Date()
				exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * days)
				window.document.cookie = "user" + "=" + user + ";path/;expires=" + exdate.toGMTString()
				window.document.cookie = "pass" + "=" + pass + ";path/;expires=" + exdate.toGMTString()
			},
			getCookie () {
				if (document.cookie.length > 0) {
					var arr = document.cookie.split('; ')
					for (var i = 0; i < arr.length; i++ ){
						var arr2 = arr[i].split('=')
						if (arr2[0] === 'user') {
							this.ruleForm.user = arr2[1]
						} else if (arr2[0] === 'pass') {
							this.ruleForm.pass = arr2[1]
						}
					}
				}
			},
			cleraCookie () {
				this.setCookie('','',-1)
			}
		},
		mounted () {
			this.getCookie()
		}
	}
</script>
<style lang="scss">
#portal {
	width:100%;
	height:100%;
	box-sizing:border-box;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534411797&di=a0f210394ad3a5d6074fc55b4691723a&imgtype=jpg&er=1&src=http%3A%2F%2Fd.paper.i4.cn%2Fmax%2F2017%2F03%2F13%2F11%2F1489375568275_045201.jpg);
	background-repeat:no-repeat;
	background-position:center;
	background-size:cover;
	.portalBg {
		height:100%;
		box-sizing:border-box;
		background:linear-gradient(to bottom,rgba(255,255,255,.5) ,rgba(255,255,255,0.35));
		@media screen and (min-width: 320px){
			padding:3rem 0 2rem;
		}
		@media screen and (min-width: 375px){
			padding:4rem 0 2.4rem;
		}
		@media screen and (min-width: 414px){
			padding:5rem 0 3rem;
		}
		@media screen and (min-width: 640px){
			padding:8rem 0 5rem;
		}
		@media screen and (min-width: 720px){
			padding:10rem 0 6rem;
		}
		.portalPic {
			width:15rem;
			height:15rem;
			margin:0 auto;
			border-radius:1rem;
			border:1px solid #999;
			overflow:hidden;
			@media screen and (min-width: 320px){
				width:11rem;
				height:11rem;
			}
			@media screen and (min-width: 375px){
				width:14rem;
				height:14rem;
			}
			@media screen and (min-width: 414px){
				width:15rem;
				height:15rem;
			}
			@media screen and (min-width: 640px){
				width:20rem;
				height:20rem;
			}
			@media screen and (min-width: 720px){
				width:24rem;
				height:24rem;
			}
			img{
				width:100%;
				hieght:auto;
			}
		}
		.portalForm{
			text-align:center;
			font-size:1.5rem;
			padding:1.5rem 0;
			p{
				width:14rem;
				@media screen and (min-width: 414px){
					width:15rem;
					min-height:4rem;
				}
				@media screen and (min-width: 640px){
					width:20rem;
					min-height:4rem;
				}
				@media screen and (min-width: 720px){
					width:24rem;
					min-height:4rem;
				}
				margin:0 auto;
				position:relative;
				overflow:hidden;
				min-height:3rem;
				label{
					position:absolute;
					left:0;
					top:0;
					z-index:1;
					line-height:3rem;
					@media screen and(min-width:320px){
						@media screen and (max-width:400px){
							line-height:2rem;
						}	
					}
				}
				input[type="text"],
				input[type="password"],
				input[type="submit"]{
					position:absolute;
					left:0;
					width:100%;
					box-sizing:border-box;
					top:0;	
					z-index:0;
					height:3rem;
					@media screen and(min-width:320px){
						@media screen and (max-width:400px){
							height:2rem;
						}	
					}
					border-radius:.4rem;
					border:1px solid #999;
					text-indent:2.8rem;
					color:#333;
				}
				input[type="submit"]{
					text-indent:0;
					color:white;
					width:calc(100% - 4px);
					background:skyblue;
					border-color:rgba(255,255,255,.2);
					box-shadow:1px 2px 4px rgba(255,255,255,.5) inset,
										 2px 2px 5px rgba(0,0,0,.3);
				}
				span{
					font-size:.875rem;
					color:#454545;
					line-height:1.6rem;
					input[type="checkbox"]{
						float:left;
						width:1rem;
						height:1rem;
						box-sizing:border-box;
						margin:.3rem ;
					}
				}
			}
		}
		.portalLink{
			position:fixed;
			bottom:2rem;
			left:2rem;
			right:2rem;
		}
	}
}
</style>
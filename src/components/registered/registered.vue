<template>
	<div id="registered" v-bind:style="'background-image:url('+registeredBack[registeredIndex].pic+')'">
		<div class="registeredBg">
			<header>
				<a class="logo" href="/" title="QQ 仅个人使用，请勿商用">
					<img src="https://4.url.cn/zc/v3/img/logo.png" />
					QQ仅个人使用，请勿商用
				</a>
			</header>
			<div class="main">
				<h1 class="welcome">欢迎注册QQ</h1>
				<h3 class="l">每一天，乐在沟通。</h3>
				<div class="validateForm">
					<form action="registered_submit" method="get" accept-charset="utf-8">
						<div class="formItem">
							<label class="labelUser" for="regUser" v-show="!regForm.user">呢称</label>
							<input type="text" name="regUser" id="regUser" v-model="regForm.user" />
						</div>

						<div class="formItem">
							<label class="labelPass" for="regPass" v-show="!regForm.pass">密码</label>
							<input type="password" name="regPass" id="regPass" v-model="regForm.pass" />
						</div>
						<div class="formItem formPhone">
							<div class="l cornetTable">
								<div class="selectDiv">
									<registered-select 
										v-bind:lists="registeredSelectList" 
										v-bind:index="registeredSelectIndex"
										v-bind:hNum="registeredSelectHeight"
									></registered-select>
								</div>
							</div>
							<div class="l phoneCode">
								<label class="labelPhone" for="regPhone" v-show="!regForm.phone">电话号码</label>
								<input type="text" name="regPhone" id="regPhone" v-model="regForm.phone" />
							</div>
						</div>
						<div class="formItem">
							<input type="button" name="regBtn" id="regBtn" value="立即注册" />
						</div>
					</form>
				</div>
			</div>
			<footer>
				{{ msg }}	
			</footer>
		</div>
	</div>
</template>
<script>
import registeredSelect from '../com/select.vue'
	export default {
		name:'jRegistered',
		created () {
			this.axios.get('/myserver/countries')
			.then((res) => {
				this.registeredSelectList = res.data.data
			}).catch((err) => {
				console.log("registered vue 56",err)
			})
		},
		data () {
			return {
				msg : 'Copyright © 1998-2018Tencent All Rights Reserved',
				registeredBack : [
					{"id":"1","pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534155490794&di=1aeb27a52ae6b6341ed247afbf3887bd&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201604%2F30%2F20160430202641_y3Ad5.jpeg"},
					{"id":"2","pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534155591514&di=1b910b8f838f3363ea96a4928a023199&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ce9f5710b37c6ac7251343acd0a4.png%401280w_1l_2o_100sh.png"},
					{"id":"3","pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534155605952&di=da93c0ed849d06ef8f688bd67c61c577&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201703%2F14%2F1858308hqur0hjal0hgrb0.jpg"},
					{"id":"4","pic":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1020550976,2360761262&fm=27&gp=0.jpg"},
					{"id":"5","pic":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534155634806&di=d179ea357ab4644c911615b801a1f205&imgtype=0&src=http%3A%2F%2Fpic.3gbizhi.com%2F2016%2F0530%2F20160530080818705.jpg.750.1334.jpg"}
				],
				registeredIndex : 0,
				regForm:{
					user : '',
					pass : '',
					phone: ''
				},
				registeredSelectList:[],
				registeredSelectHeight:3,
				registeredSelectIndex:0
			}
		},
		computed : {
			
		},
		methods : {
			computedRegisteredBack () { // 计算整体背景图片
				setInterval(() => {
					this.registeredIndex++
					if (this.registeredIndex >= this.registeredBack.length) {
							this.registeredIndex = 0
					}
				},5000)
			}
		},
		mounted () {
			this.computedRegisteredBack()
		},
		components : {
			registeredSelect
		}
	}
</script>
<style lang="scss">
	#registered {
		width:100%;
		height:100%;
		background-repeat:no-repeat;
		background-size:cover;
		background-position:center;
		.registeredBg{
			width:100%;
			height:100%;
			background:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(255,255,255,.1));
			padding:2rem 2.5rem;
			box-sizing:border-box;
			header {
				.logo {
					height:3rem;
					line-height:3rem;
					display:inline-block;
					color:#333;
					img {
						max-height:3rem;
						min-height:2.4rem;
						width:auto;
					}
				}
			}/* header end*/
			.main{
				padding:1.5rem .5rem .5rem;
				.welcome {
					margin-bottom:1.25rem;
				}
				.l{
					margin-bottom:2rem;
					color:#333;
				}
				.validateForm {
					overflow:hidden;
					width:100%;
					.formItem{
						width:100%;
						position:relative;
						height:3rem;
						margin-bottom:3rem;
						label {
							position:absolute;
							left:1rem;
							line-height:3rem;
							z-index:2;
							color:#999;
						}
						input[type="text"],input[type="password"],input[type="button"] {
							position:absolute;
							left:.5rem;
							right:.5rem;
							font-size:1.2rem;
							width:calc(100% - 1rem);
							height:3rem;
							border-radius:.4rem;
							text-indent:.5rem;
						}
						input[type="text"]:focus,input[type="password"]:focus{
							border:1px solid red;
						}
						.cornetTable{
							position:absolute;
							left:.5rem;
							width:6rem;
							height:100%;
						}
						.phoneCode {
							position:absolute;
							left:6.5rem;
							width:calc(100% - 6.5rem);
							label{
								position:absolute;
								left:1rem;
								z-index:2;
							}
						}
						#regBtn {
							border: 1px #3083ff solid;
							border-radius: 4px;
							letter-spacing:.1rem;
							background-color: #3487ff;
							box-shadow: 0 5px 8px 0 rgba(24,95,255,.1);
							color: #fff;
							text-align: center;
							font-weight: lighter;
							background-image: linear-gradient(0deg,#398bff,#3083ff);
						}
						#regBtn:hover {
							 background-color:#3580eb;
               background-image:linear-gradient(0deg,#3580eb,#2c79eb)
						}
					}
					.formItem:last-child{
						margin-bottom:8rem;
					}
				}/*validateForm 表单div */
			}/** main end*/
			footer {
				text-align:center
			}
		}
	}
</style>


/*// #307CEB
<template>
	<div class="addressBook"> 
		<div class="addressBookHead">
			<div class="addressBookNavs">
				<a class="pathBack back l" v-on:click="closeComponent()"> 消息</a>
				<span> 通讯录 </span>
			</div>
		</div>
		<div class="addressBookBody">
			
		</div>
	</div>
</template>
<script>
	export default {
		props :{
			childBoolean:{
				type : Boolean,
				default : true
			}
		},
		data () {
			return {
				msg : " addressBook"
			}
		},
		methods : {
			closeComponent () {
				this.childBoolean = false
				this.$emit('changeChildState',this.childBoolean)
			}
		}
	}
</script>
<style lang="scss">
.addressBook{
		width:100%;
		height:100%;
		position:fixed;
		z-index:20;
		top:0;
		bottom:0;
		background:white;
		.addressBookHead{
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
			.addressBookNavs {
				position:absolute;
				z-index:10;
				width:calc(100% - 2rem);
				line-height:3rem;
				font-size:1.4125rem;
				.pathBack {
					line-height:3rem;
					font-size:1.25rem;
				}
			}
		}
	}
</style>
<template>
	<div class="apiSeconHead">
		<a v-for="(item,index) in items"
		   v-bind:key="index"
		   v-bind:class="item.icon!==''?item.icon:''"
		   v-bind:href="item.href!==''?item.href:''"
		   v-text="item.text!==''?item.text:''"	
		></a>	 
	</div>
</template>
<script>
	export default {
		props : {
			items : {
				type : Array,
				default : () => []
			}
		},
		data () {
			return {
				msg :'二级header'
			}
		}
	}
</script>
<style>
	.apiSeconHead{
		height:5rem;
		background:#18B4ED;
		text-align:center;
		padding:0 .5rem;
	}
	.apiSeconHead >*{
		line-height:5rem;
		min-width:4rem;
		color:white;
		font-size:1.2rem;
	}
	.apiSeconHead >*:first-child{
		font-size:2rem;
		text-align:left;
	}
</style>
<template>
	<div class="navIconLinks navIconLinkThree">
		<div class="navIconLink" 
			v-for="(item,index) in lists"
			v-bind:key="index"
		>
			<a v-bind:href="pathF+item.href">
				<i v-bind:class="item.icon"></i>
				<span v-text="item.text"></span>
			</a>
		</div>		
	</div>
</template>
<script>
	export default {
		props : {
			lists : {
				type : Array ,
				default : () => []
			},
			pathF : {
				type : String 
			}
		},
		data () {
			return {

			}
		}
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
</style>
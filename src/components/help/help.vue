<template>
	<div id="help">
		{{ msg }}
	</div>
</template>
<script>
	export default {
		name:'help',
		data () {
			return {
				msg : 'help'
			}
		}
	}
</script>
<style lang="scss">
#help {
	width:100%;
	height:100%;
	box-sizing:border-box;
	background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534411797&di=a0f210394ad3a5d6074fc55b4691723a&imgtype=jpg&er=1&src=http%3A%2F%2Fd.paper.i4.cn%2Fmax%2F2017%2F03%2F13%2F11%2F1489375568275_045201.jpg);
	background-repeat:no-repeat;
	background-position:center;
	background-size:cover;
}
</style>
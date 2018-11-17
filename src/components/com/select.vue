<template>
	<div class="selectDiv" v-bind:style="'height:calc('+hNum+'rem + 1px)'">
		<div class="selected" >
			<a v-bind:style="'line-height:'+hNum+'rem'">{{ lists[index].word }}</a>
			<input name="Tel" class="Tel" 
				v-bind:style="'line-height:'+hNum+'rem'"
				v-show="inputFlg"  
				v-model="lists[index].word" />
			<span v-bind:class="{'on':flg}"
				  v-bind:style="'height:'+hNum+'rem'"
				  v-on:click.stop="changeFlg"	
			></span>
		</div>
		<div class="selectList" v-show="flg">
			<ul>
				<li v-for="(item,order) in lists"
					v-bind:key="order"
					v-on:click="changeIndex(order)">
					<a> {{ item.cn }} </a> <span>+ {{ item.word }}</span>
				</li>
			</ul>
		</div>
		<!-- {{ msg }}
		{{ index }}
		{{ lists }} -->
	</div>
</template>
<script>
	export default {
		props:{
			lists:{
				type:Array ,
				default:() => []
			},
			index:{
				type:Number ,
				default:() => 0
			},
			hNum : {
				type:Number ,
				default:() => 0
			}
		},
		data () {
			return {
				msg :"select.vue",
				flg :false,
				inputFlg:false
			}
		},
		methods : {
			changeFlg () {
				this.flg = !this.flg
			},
			changeIndex (num) {
				this.index = num
				this.flg = false 
			}
		}
	}
</script>
<style lang="scss">
.selectDiv{
	width:100%;
	position:relative;
	.selected {
		height:100%;
		width:100%;
		background:white;
		border-radius:.4rem;
		border:1px solid #ccc;
		box-sizing:border-box;
		position:relative;
		a,input.Tel {
			position:absolute;
			padding-left:.5rem;
			font-size:1.2rem;
			font-weight:bolder;
			color:#000;
			background:transparent;
			left:0;
			right:2rem;
			width:calc(100% - 2rem);
		}
		span::before,span.on::before{
			content:'';
			border:.4rem solid transparent;
			position:absolute;	
		}
		span::before {
			border-top:.5rem solid #999;
			top:calc(50% - .25rem);
			left:calc(50% - .2rem);
		}
		span.on::before{
			border-bottom:.5rem solid #999;
			top:calc(50% - .5rem);
			left:calc(50% - .2rem);
		}
		span,.on {
			width:2rem;
			display:inline-table;
			float:right;
			position:relative;
		}
	}
	.selectList {
		position:absolute;
		left:0;
		top:3rem;
		min-width:18rem;
		background:white;
		z-index:2;
		border:1px solid #f0c;
		max-height:13rem;
		overflow-y:auto;
	}
}

	
</style>
<template>
	<div class="state">
		<div class="searchLink">
			<a href="/searchLink" title="搜索电影 音乐 商品">
				<i class="search-1">搜索</i>
			</a>
		</div>
		<div class="navIconLinks navIconLinkThree">
			<div class="navIconLink">
				<a href="state/friendCircle" title="好友动态">
					<i class="star"></i>
					<span>好友动态</span>
				</a>
			</div>
			<div class="navIconLink">
				<a href="state/coordinates">
					<i class="coordinates"></i>
					<span>附近</span>
				</a>
			</div>
			<div class="navIconLink">
				<a href="state/Interest">
					<i class="Interest"></i>
					<span>兴趣部落</span>
				</a>
			</div>				
		</div>
		<div class="stateFnsList">
			<ul>
				<li 
					v-for="(fnItem,fnIndex) in stateFns"
					v-bind:key="fnIndex"
					v-if="fnItem.state"
				>
					<a>
						<i v-bind:class="'l '+fnItem.icon"></i>
						<strong class="l"> {{ fnItem.title }} </strong>
						<span class="r arrow"></span>
					</a>
				</li>
			</ul>
		</div>
		 
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		created () {
			this.axios.get('/myserver/stateFns')
				.then((res) => {
					this.stateFns = res.data.data
				})
				.catch((err) => {
					console.log('state',err)
				})
		},
		data () {
			return {
				msg : " state.vue",
				stateFns : [ ] //功能列表 
			}
		}
	}
</script>
<style>
.state{
	background:#f8f9fb;
}
.stateFnsList{
	margin-top:2.5rem;
	background:white;
}
.stateFnsList ul li{
	padding:1rem .5rem;
	border-bottom:1px solid #ececec;
	overflow:hidden;
}
.stateFnsList ul li a>*{
	line-height:2.5rem;
	height:2.5rem;
	display:inline-block;
}
.stateFnsList ul li i::before{
	line-height:2.5rem;
}
.stateFnsList ul li i{
	font-size:2.5rem;
}
.stateFnsList ul li strong.l{
	padding-left:2rem;
	font-size:1.5rem;
}
.stateFnsList ul li .arrow::before,.stateFnsList ul li .arrow::after{
	content:'';
	border:.8rem solid transparent;
	border-left:1rem solid;
	position:absolute;
	top:calc(50% - .8rem);
}
.stateFnsList ul li .arrow::before{
	border-left-color:#999;
	right:0;
}
.stateFnsList ul li .arrow::after{
	border-left-color:#fff;
	right:.2rem;
}
.stateFnsList ul li .arrow{
	width:1rem;
	background:transparent;
	display:inline-block;
	position:relative;
}
</style>
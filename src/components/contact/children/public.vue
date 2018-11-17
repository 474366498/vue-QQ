<template>
	<div id="apiSecondary">
		<api-secon-head v-bind:items="lists"></api-secon-head>
		<main class="apiSeconMain">
			<div class="contactGroupSearch">
				<a title="调用dialog" v-on:click="openDailog">
					<i class="search-1">搜索</i>
				</a>
			</div>
			<div class="contactPublicCont">
				<div class="contactPublicItem"
					v-for="(item,index) in publicList"
					v-bind:key="index"
				>
					<h5> {{ item.class }} </h5>
					<div class="contactPublicItemChild">
						<ul>
							<li v-for="(child,order) in item.child"
								v-bind:key="order"
							>
								<a>
									<div class="publicPic l">
										<img v-bind:src="child.pic" />
									</div>
									<div class="publicInfo l">
										<p> {{ child.title }} </p>
										<span> {{ child.id}} </span>
									</div>
									<div class="publicSign r">
										<i v-if="child.sign"> </i>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
		<div class="searchDialog" v-show="Dialog"> 
			<div class="Search">
				<input class="l" type="text" name="searchText" placeholder="搜索" v-model="DialogSearch" />
				<a class="r" v-on:click="closeDialog">取消</a>
			</div>
			<div class="DialogResult" v-if="DialogSearch">
				{{ DialogSearch }}
			</div>
		</div>
	</div>
</template>
<script>
import apiSeconHead from '@/components/frame/secondary/header.vue'
	export default {
		created () {
			this.axios.get('/myserver/public')
			.then( (res) => {
				this.publicList = res.data.data
			})
			.catch((err) => {
				console.log(err)
			})
		},
		data () {
			return {
				lists : [
					{"id":"s1","href":"/" + this.$route.path.split('/')[1],"icon":"l back","text":""},
					{"id":"s2","href":"","icon":"","text":"公众号"},
					{"id":"s3","href":"./add","icon":"r","text":"添加"}
				],
				publicList:[],
				Dialog:false,
				DialogSearch:""
			}
		},
		methods : {
			openDailog () {
				this.Dialog = true
			},
			closeDialog () {
				this.Dialog = false
			}
		},
		components : {
			apiSeconHead
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
.contactGroupSearch {
	padding:.5rem;
}
.contactGroupSearch a{
	width: 100%;
    display: inline-block;
    background: white;
    text-align: center;
    color: #999;
    border-radius: .5rem;
    border: 1px solid #ddd;
    -webkit-box-shadow: 0px 0px 2px #ccc;
    box-shadow: 0px 0px 2px #ccc;
}

.contactPublicCont {

}
.contactPublicItem h5{
	text-indent: 1rem;
    line-height: 2rem;
}
.contactPublicItem .contactPublicItemChild ul li{
	padding: .75rem 1rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
  background: white;
}
.contactPublicItem .contactPublicItemChild ul li .publicPic{
	height:4rem;
	border-radius:.25rem;
	border:1px solid #efefef;
	box-sizing:border-box;
}
.contactPublicItem .contactPublicItemChild ul li .publicPic img{
	height:4rem;
	width:auto;
}
.contactPublicItem .contactPublicItemChild ul li .publicInfo{
	max-width: calc(100% - 6rem - 6rem);
  padding-left: 1.5rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.contactPublicItem .contactPublicItemChild ul li .publicInfo p{
  line-height: 2.5rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: #333;
  overflow: hidden;
  height: 2.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.contactPublicItem .contactPublicItemChild ul li .publicInfo span{
  color: #999;
  line-height: 1.5rem;
  overflow: hidden;
  height: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.contactPublicItem .contactPublicItemChild ul li .publicSign{
	padding:1.2rem;
}
.contactPublicItem .contactPublicItemChild ul li .publicSign i::before{
	content:'';
	width:1.6rem;
	height:1.6rem;
	background:#F09B48;
	display:inline-block;
	position:absolute;
	transform:rotate(45deg);
}
.contactPublicItem .contactPublicItemChild ul li .publicSign i{
	width:1.6rem;
	height:1.6rem;
	background:#F09B48;
	display:inline-block;
	position:relative;
}






.searchDialog {
	position:fixed;
	top:0;
	width:100%;
	height:100%;
	background:rgba(0,0,0,.25);
}
.Search {
	padding:.5rem 1.5rem;
	background:white;
	overflow:hidden;
	border-bottom:1px solid #eee;
}
.Search input[type="text"]{
	width:calc(100% - 4rem);
	height:2.5rem;
	text-indent:.25rem;
	border:1px solid #efefef;
	border-radius:.5rem;
}
.Search a{
	height:2.5rem;
	line-height:2.5rem;
	color:#18B4ED;
}
.DialogResult{
	height:calc(50%);
	background:white;
	text-align:center;
}
</style>
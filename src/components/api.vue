<template>
  <div id="api" class="api">
    <div class="apiPart" 
      v-bind:class="boolean ? 'animation' :''"
    >
      <div id="apiHeader" class="apiHeader">
        <api-header 
          v-bind:apiPushHandBoolean="boolean"
          v-on:changeAppDialog ="getAppDialog"
        ></api-header>
      </div>
      <div id="apiMain" class="apiMain">
        <router-view ></router-view>  
      </div>
      <div id="apiFooter" class="apiFooter">
        <api-footer></api-footer>
      </div>
    </div>
    <div class="apiPushHand" 
      v-bind:class="boolean ? 'animation':''"
    >
      <div class="pushHandInside">
        <div class="pushHandTop"> <!-- 点击 更换背景-->
          <div class="qrCode"></div> <!--展示二维码 -->
          <div class="pushHandInfo">
            <div class="pushHandIconName">
              <span class="pushHandPic l"><img src="http://img.qq1234.org/uploads/allimg/140808/19103WP5-10.jpg" /></span>
              <span class="pushHandName l">星座爱好者</span>
            </div>
            <div class="pushHandClass" v-html="numberStarLevel"></div>
            <div class="signature">平凡是福，不思进取是罪，堕落等于罪上加罪。</div>
          </div>
        </div>
        <div class="pushHandMain">
          <ul>   
              <li><a><i class="members"></i> <strong>了解会员特权</strong> </a></li>
              <li><a><i class="wallet"></i> <strong>QQ钱包</strong> </a></li>
              <li><a><i class="palette"></i> <strong>个性装扮</strong> </a></li>
              <li><a><i class="collection"></i> <strong>我的收藏</strong> </a></li>
              <li><a><i class="photo"></i> <strong>我的相册</strong> </a></li>
              <li><a><i class="file"></i> <strong>我的文件</strong> </a></li>       
          </ul> 
        </div>
        <div class="pushHandBot">
          <div class="temperature">35</div>
          <div class="pushHandBotNavs">
            <a><i class="set">设置</i></a>
            <a>
              <i 
                v-bind:class="dayBoolean ? 'night' : 'day' " 
                v-text="dayBoolean ? '夜间' : '日间' "
                v-on:click="changeDayBoolean"
              ></i>
            </a>
            <a id="LBS" class="geolocation"><i>成都市</i></a>
          </div>
        </div>
      </div>
      <div class="apiPushHandMargin" v-on:click="setAppDialog">  </div>
      {{ boolean }}
    </div>
  </div>
</template>

<script> 

import apiHeader from './frame/header.vue'
import apiFooter from './frame/footer.vue'

export default {
  created () {
  
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      boolean:false,
      starLevel:10,
      dayBoolean:false
    }
  },
  computed :{
    numberStarLevel () {
      let level = "" 
      const  king = `<svg class="icon-huangguan" aria-hidden="true">
            <use xlink:href="#icon-huangguan"></use>
          </svg>`
      const  sum = `<svg class="icon-taiyang" aria-hidden="true">
            <use xlink:href="#icon-taiyang"></use>
          </svg>`
      const  moon = `<svg class="icon-moonbyueliang" aria-hidden="true">
            <use xlink:href="#icon-moonbyueliang"></use>
          </svg>`
      const  star = `<svg class="icon-xing1" aria-hidden="true">
            <use xlink:href="#icon-xing1"></use>
          </svg>`
        // 4 16 64 
        if (this.starLevel / 64 > 1) {
          level = king
        } 
        if (this.starLevel % 64 / 16 > 1) {
          for (var i = 0; i < Math.floor(this.starLevel % 64 / 16); i++) {
            level += sum
          }
        }
        if ( this.starLevel % 64 % 16 / 4 > 1) {
          for (var x = 0; x < Math.floor(this.starLevel % 64 % 16 / 4); x++) {
            level += moon
          }
        }
        for ( var y = 0; y < this.starLevel % 4; y++) {
          level += star
        }

        //console.log(level)
        return level
      /*return `
        <svg class="icon-huangguan" aria-hidden="true">
          <use xlink:href="#icon-huangguan"></use>
        </svg>
        <svg class="icon-taiyang" aria-hidden="true">
          <use xlink:href="#icon-taiyang"></use>
        </svg> 
        <svg class="icon-moonbyueliang" aria-hidden="true">
          <use xlink:href="#icon-moonbyueliang"></use>
        </svg>
        <svg class="icon-xing1" aria-hidden="true">
          <use xlink:href="#icon-xing1"></use>
        </svg>
      `+this.starLevel*/
    }
  },
  methods :{
    getAppDialog (bool) {
      this.boolean = bool
      console.log(bool)
    },
    setAppDialog () {
      if (this.boolean) {
        this.boolean = false 
      }
    },
    changeDayBoolean () {
      this.dayBoolean = !this.dayBoolean
    }
  },
  mounted () {
    
  },
  components : {
    apiHeader,
    apiFooter
  }
}

</script>

<style>

#api{
  width:100%;
  height:100%;
  background:linear-gradient(to bottom, white , skyblue);
  position:relative;
}
.apiPart{
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  transition:all .5s ease;
  transform:translateX(0)
}
.apiPart.animation{
  transform:translateX(75%)
}
#apiHeader{
  height:5rem;
  width:100%;
  position:absolute;
  left:0;
  top:0;
}
#apiMain{
  width:100%;
  position:absolute;
  left:0;
  top:5rem;
  overflow-y:auto;
  bottom:4.5rem;
  background:white;
}
#apiFooter{
  height:4.5rem;
  width:100%;
  position:absolute;
  left:0;
  bottom:0;
}


.apiPushHand{
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  z-index:2;
  background:rgba(0,0,0,.3);
  transition:all .5s ease;
  transform:translateX(-100%);
}
.apiPushHand.animation{
  transform:translateX(0);
}
.pushHandInside {
  width:75%;
  height:100%;
  position:relative;
  background:wheat;
  float:left;
}
.pushHandTop {
  background:url(http://img.mydiyclub.com/data/attachment/album/201707/20/084607bfajssjzhthi68he.jpg) no-repeat left top;
  background-size:100% ;
  padding:3rem 1.5rem 1.5rem 1.5rem;
  box-sizing:border-box;
  box-shadow: 0 2px .5rem inset rgba(0,0,0,.25),
              -3px 0 .5rem inset rgba(255,255,255,.9),
              0 -3px .5rem inset transparent,
              3px 0 .5rem inset transparent;
}
.pushHandTop .qrCode{
  text-align:right;
  color:white;
  font-size:1.75rem;
}
.pushHandIconName{
  overflow:hidden;
}
.pushHandIconName .pushHandPic{
  width:2.5rem;
  height:2.5rem;
  display:inline-block;
  border-radius:50%;
  border:.15rem solid white;
  overflow:hidden;
}
.pushHandIconName .pushHandPic img{
  width:100%;
  height:auto;
}
.pushHandIconName .pushHandName{
  font-size:2rem;
  color:white;
  margin-left:1rem;
}
.pushHandInfo .pushHandClass{
  margin-top:.75rem;
}
.pushHandInfo .signature {
  padding-top:.75rem;
  height:3.6rem;
  line-height:1.8rem;
  width:100%;
  /*text-overflow:ellipsis;
  white-space:nowrap;*/
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  overflow:hidden;
  color:white;
  text-shadow:0 0 2px black;
}

.pushHandMain{
  padding:2rem 1.5rem 0;
}
.pushHandMain li {
  padding:.5rem 0 ;
  width:100%;
  display:inline-flex;
}
.pushHandMain li *{
  line-height:2.5rem;
  font-size:2rem;
}
.pushHandMain li i {
  width:2rem;
  display:inline-block;
  text-align:center;
}
.pushHandMain li i.wallet{
  font-size:1.45rem;
}
.pushHandMain li i.file{
  font-size:1.75rem;
}
.pushHandMain li strong{
  font-size:1.15rem;
}
.pushHandBot {
  position:absolute;
  bottom:0;
  left:0;
  right:0;
}
.pushHandBot .temperature{
  text-align:right;
  color:#0eb8f3;
  padding-right:2.5rem;
  font-size:2.5rem;
}
.pushHandBot .pushHandBotNavs{

}
.pushHandBot .pushHandBotNavs > a{
  width:33.33%;
  line-height:3rem;
  height:4rem;
  display:inline-block;
  float:left;
  text-align:center;
}
.pushHandBot .pushHandBotNavs > a i::before {
  font-size:1.5rem;
  line-height:3rem;
  position:absolute;
  top:calc(50% - 1.5rem);
  left:0;
}
.pushHandBot .pushHandBotNavs > a i {
  font-size:1.15rem;
  line-height:3rem;
  position:relative;
  padding-left:2rem;
}
.pushHandBot .pushHandBotNavs > a:last-child >i{
  font-style:normal;
  padding-left:0;
}


.apiPushHandMargin{
  width:25%;
  height:100%;
  float:left;
}
</style>

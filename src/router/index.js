import Vue from 'vue'
import Router from 'vue-router'

import jPortal from '@/components/portal/portal.vue'
import jRegistered from '@/components/registered/registered.vue'
import jHelp from '@/components/help/help.vue'
import jApi from '@/components/api.vue'

import jMessage from '@/components/message/index.vue'
  import jMessagePalette from '@/components/messagePalette/index.vue'

import jContact from '@/components/contact/index.vue'
  import jContactFriend from '@/components/contact/children/friend.vue'
  import jContactGroup from '@/components/contact/children/group.vue'
  import jContactPublic from '@/components/contact/children/public.vue'

import jState from '@/components/state/index.vue'
  import jFriendCircle from '@/components/state/friendCircle/index.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,	
  routes: [
    {
      path: '/',
      name: 'Portal',
      component: jPortal
    },
    {
    	path:'/registered',
    	name:'registered',
    	component:jRegistered
    },
    {
    	path:'/help',
    	name:'help',
    	component:jHelp
    },
    {
    	path:'/api',
    	name:'index',
    	component:jApi,
    	children:[
    		{path:'/',name:'default',component:jMessage},
    		{
          path:'/message',
          name:'消息',
          component:jMessage,
          children : [
            {path:':id',name:'信息',component:jMessagePalette}
          ]
        },
    		{
          path:'/contact',
          name:'联系人',
          component:jContact,
          children:[
            {path:'friend',name:'new friend',component:jContactFriend},
            {path:'group',name:'new group',component:jContactGroup},
            {path:'public',name:'new public',component:jContactPublic}
          ]
        },
    		{
          path:'/state',
          name:'动态',
          component:jState,  // 把这个单独用一个router-view包装 加一个根(root)用于放置原来router-view以外的内容
          children:[
            {path:'friendCircle',name:'朋友圈',component:jFriendCircle},
            {path:'coordinates',name:'附近',component:jFriendCircle},
            {path:'Interest',name:'兴趣部落',component:jFriendCircle}
          ]
        }
    	]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Index',
    component:()=>import('@/views/Main.vue'),
    //进入首页后默认显示个人推荐
    redirect:'personality',
    children:[
      {
        path:'/personality',
        name:'personality',
        component:()=>import('@/views/Personality')
      },
      {
        path:'/rankList',
        name:'rankList',
        component:()=>import('@/views/RankList')
      },
      {
        path:'/songSheet',
        name:'songSheet',
        component:()=>import('@/views/SongSheet')
      },
      {
        path:'/singer',
        name:'singer',
        component:()=>import('@/views/Singer')
      },
    ]
  }
  
]

const router = new VueRouter({
  // //路由的匹配模式
  // mode:'history',
  routes
})

export default router

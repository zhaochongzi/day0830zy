import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header'
import List from '@/pages/List'
import Ranking from '@/pages/Ranking'
import Show from '@/pages/Show'
import Bookshelf from '@/pages/Bookshelf'
import Adomission from '@/pages/Admission'
import Female from '@/pages/Female'
import MyBookshelf from '@/pages/MyBookshelf'
import Recent from '@/pages/Recent'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/header',
      name: 'Header',
      component: Header
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },{
      path: '/show',
      name: 'Show',
      component: Show,
      children:[{
        path:'/admission',
        component:Adomission
      },{
        path:'/female',
        component:Female
      }]
    },{
      path:'/bookshelf',
      name:'Bookshelf',
      component:Bookshelf,
      children:[{
        path:'/myBookshelf',
        component:MyBookshelf
      },{
        path:'/recent',
        component:Recent
      }]
    }
  ]
})

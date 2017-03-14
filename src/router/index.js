import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import home from '@/components/Home'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {path:'/performance',component:Hello}
      ]
    },
    {
      path:'*',
      name:'other',
      redirect:{path:'/login'}
    }
  ]
})

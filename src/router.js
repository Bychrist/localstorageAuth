import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Secure from './components/secure.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login
    },
  
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
     
    },
 
  ]
})






export default router
import Vue from 'vue'
import Router from 'vue-router'

/*4个主要页面结构*/
import home from 'pages/home/home'
import sports from 'pages/sports/sports'
import travels from 'pages/travels/travels'
import user from 'pages/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    } ,
    {
      path: '/',
      name: 'sports',
      component: sports
    } ,
    {
      path: '/',
      name: 'travels',
      component: travels
    } ,
    {
      path: '/',
      name: 'user',
      component: user
    }
  ]
})

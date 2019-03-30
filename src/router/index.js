import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Order from '../pages/Order/Order.vue';
import Search from '../pages/Search/Search.vue';
import Personal from '../pages/Personal/Personal.vue';


Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path:'/',
    redirect: {name: 'home'}
  },{
    path: '/home',
    name: 'home',
    component: Home
  },{
    path: '/Order',
    component: Order
  },{
    path: '/search',
    component: Search
  },{
    path: '/personal',
    component: Personal
  }],
  // 使用mui-active类名样式替换router-link-active
  linkActiveClass: 'mui-active'
})

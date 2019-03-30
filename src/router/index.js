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
    redirect: Home
  },{
    path: '/home',
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
  }]
})

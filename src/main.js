import Vue from 'vue'
import App from './App'
import router from './router/index.js'
// 引入MUI样式
import '../static/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'
// 按需引用min-ui组件
import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 引入axios
// import Axios from 'axios'
// Vue.use(Axios)



 new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
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

// 时间过滤器
import Moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
  return Moment(dataStr).format(pattern)
})



 new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
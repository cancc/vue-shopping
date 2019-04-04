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
  SwipeItem,
  button,
  Switch
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(button.name, button);
Vue.component(Switch.name, Switch);

// vuex状态管理
import store from './store/index'

// 时间过滤器
import Moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return Moment(dataStr).format(pattern)
})



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

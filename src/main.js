import Vue from 'vue'
import App from './App'
import router from './router/index.js'
// 引入MUI样式
import '../lib/mui/css/mui.min.css'

import {
  Header
} from 'mint-ui';

Vue.component(Header.name, Header);



 new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
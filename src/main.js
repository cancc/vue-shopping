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
  button
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(button.name, button);

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    car: [], // 购物车
  },
  mutations: {
    
    addCar(state, data) { // 添加到购物车数据
      let sameId = false // 没有一样的id
      state.car.some(item => {
        if(item.id === data.id) {
          item.count += parseInt(data.count)
          sameId = true
          return true;
        }
      })
      if(sameId === false) {
        state.car.push(data)
      }
    }
    
  }
})
// import store from './store/index'

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

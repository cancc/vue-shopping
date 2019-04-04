import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
let car = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
  state: {
    car: car, // 购物车
  },
  mutations: {

    addCar(state, data) { // 添加到购物车数据

      let sameId = false // 没有一样的id
      state.car.some(item => {
        if (item.id == data.id) {
          item.count += parseInt(data.count)
          sameId = true
          return true;
        }
      })
      // 没有相同的id
      if (sameId === false) {
        state.car.push(data)
      }
      // 本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateCarTotal(state,data) { //添加到购物车数据
      console.log(data)
      state.car.some(item => {
        if(item.id == data.id) {
          item.count = parseInt(data.count)
           return true;
        }
       
      });
      // 本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    delCarSelect(state,id) { // 删除购物车的一件商品
      console.log(state.car)
      state.car.some((item,index) => {
        if(item.id ==id) {
          state.car.splice(index, 1)
          return true;
        }
      });
      // 本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    changeSelect(state, id) { // 切换勾选状态
      state.car.some(item => {
        if(item.id == id) {
          item.selectFlag = !item.selectFlag
          return true
        }
      });
      // 本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getCarTotal(state) { // 购物车订单总数
      let countInit = 0
      state.car.forEach(item => {

        countInit += item.count

      });
      return countInit
    },
    
    getOrderNum(state) { // 购物车订单每一项数量
      let order = {}
      state.car.forEach(item => {

        order[item.id]=item.count

      });
      console.log(order)
      return order;
    },
    getSelect(state) { // 购物车商品是否勾选
      let selectFlag = {}
      state.car.forEach(item => {
        selectFlag[item.id] = item.selectFlag
      })
      console.log(selectFlag)
      return selectFlag;
    },
    getCarTotalAndGoodsPrice(state) { //计算勾选商品的数量和总价格
      let g = {
        countTotal: 0,
        priceTotal: 0
      }
      state.car.forEach(item => {
        if(item.selectFlag) {
          g.countTotal += item.count
          g.priceTotal += item.price*item.count
        }
      });
      return g;
    }
  }
})
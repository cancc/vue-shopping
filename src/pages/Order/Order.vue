<template>
  <div class="order-list">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods-item">
          <div class="order-info" v-for="(item, index) in orderlist" :key="index">
            <!-- 开关 -->
            <mt-switch v-model="$store.getters.getSelect[item.id]"
              @change="changeSelect(item.id)"></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="item-info">
              <h3 class="title">{{item.title}}</h3>
              <p class="num">
                <span class="price">￥{{item.sell_price}}</span>
                <order-num-box :goodsid="item.id" :count="$store.getters.getOrderNum[item.id]"></order-num-box>
                <a @click.prevent="del(item.id,index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods-item">
          <div class="total">
            <p class="goods-total">总计：</p>
            <p class="goods-select">
              已选商品
              <span class="num">{{$store.getters.getCarTotalAndGoodsPrice.countTotal}} </span>件 总价:
              <span class="price">￥{{$store.getters.getCarTotalAndGoodsPrice.priceTotal}}</span>
              <mt-button class="btn" type="danger" size="normal" >去结算</mt-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderNumBox from "./orderNumBox";
import Axios from "axios";
export default {
  data() {
    return {
      orderlist: [], // 购物车商品列表
      // selectFlag: false
    };
  },
  created() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      let ids = [];
      this.$store.state.car.forEach(item => {
        ids.push(parseInt(item.id));
      });
      if (ids.length == 0) {
        return;
      }
      Axios.get(
        "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
          ids.join(",")
      ).then(res => {
        if (res.data.status === 0) {
          this.orderlist = res.data.message;
          // console.log(this.orderlist);
        }
      });
    },
    del(id,index) { // 删除一件商品
      this.$store.commit("delCarSelect", id);
      this.orderlist.splice(index,1)
      this.getOrderList();
    },
    changeSelect(id) {
      this.$store.commit('changeSelect',id)
    }
  },
  components: {
    OrderNumBox
  }
};
</script>

<style lang="stylus"scoped>
.order-list {
  .order-info {
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
  }

  .item-info {
    .title {
      font-size: 16px;
    }

    .num {
      .price {
        font-size: 13px;
        color: red;
      }
    }
  }
  
}
.total {
  .goods-total {
    font-size 18px
    color red

  }
  .goods-select {
    display flex
    align-items center
    .num {
      font-size 18px
      color red
    }
    .price {
      font-size 18px
      color red
    }
    .btn {
      margin-left 30px 
    }
  }
    
  }
}
</style>
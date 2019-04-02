<template>
  <div class="goodslist" >
    <div class="goods-item" v-for="(item,index) in goodsList" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <p class="price">
        <span class="new">￥{{item.sell_price}}</span>
        <span class="old">{{item.market_price}}</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>已售{{item.stock_quantity}}件</span>
      </p>
    </div>
    <mt-button type="danger" plain size="large" @click="goodsMore">加载更多</mt-button>
  </div>
</template>

<script type="${text/ecmascript-6}">
import Axios from 'axios'
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      goodsList: [], // 返回的商品数据
      pageindex: 1, // 分页
    };
  },
  created() {
    this.getGoodsList()
  },
  mounted() {
    
  },
  methods: {
    getGoodsList() {
      Axios.get(`http://www.liulongbin.top:3005/api/getgoods?pageindex=${this.pageindex}`)
        .then(res => {
          if(res.data.status === 0) {
            let data = res.data.message
            if(data.length === 0) {
              Toast("没有更多数据");
              return;
            }
            data.map(item => {
              return this.goodsList.push(item)
            })
            console.log(this.goodsList)
          }
        })
    },
    goodsMore() {
      this.pageindex++
      this.getGoodsList()
    }
  }
};
</script>

<style lang="stylus" scoped>
.goodslist {
  width 100%
  padding 0 10px 10px 10px
  display flex
  flex-wrap: wrap
  justify-content space-between
  .goods-item{
    width 49%
    min-height 290px
    border 1px solid #eee
    margin 4px 0
    display flex
    flex-direction column
    justify-content space-between
    img {
      width 100%
    }
    .title {
      font-size 18px
    }
    .price {
      .new {
        font-size 16px
        color red
        font-weight bold
      }
      .old {
        text-decoration line-through
      }
    }
    .sell {
      display flex
      justify-content space-between
      padding-right 6px
      font-size 14px
    }

  }
}
</style>
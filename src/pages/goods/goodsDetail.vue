<template>
  <div class="goods-detail">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag"></div>
    </transition>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in loopImg" :key="index">
        <img :src="item.src" class="loop">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 商品信息 -->
    <div class="goods-buy">
      <h1 class="title">{{goodsInfo.title}}</h1>
      <hr>
      <p class="price">
        <span class="old">市场价： ￥{{goodsInfo.market_price}}</span>
        <span class="new-desc">销售价:</span>
        <span class="new-price">￥{{goodsInfo.sell_price}}</span>
      </p>
      <p class="number">
        <span>购买数量:</span>
        <span class="mui-numbox" id="num" >
          <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
          <input class="mui-input-numbox" type="number" value="0">
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </span>
      </p>
      <p>
        <span>
          <button type="button" class="mui-btn mui-btn-royal">立即购买</button>
        </span>
        <span>
          <button type="button" class="mui-btn mui-btn-danger" @click="goShoppingCar">加入购物车</button>
        </span>
      </p>
    </div>
    <!-- 商品参数 -->
    <div class="goods-desc">
      <div class="info">
        <h1 class="info-title">商品参数</h1>
      </div>
      
      <div class="desc">
        <p class="desc1">
          <span>商品货号:</span>
          <span>{{goodsInfo.goods_no}}</span>
        </p>
        <p class="desc2">
          <span>库存情况:</span>
          <span>{{goodsInfo.stock_quantity}}件</span>
        </p>
        <p class="desc3">
          <span>上架时间:</span>
          <span>{{goodsInfo.add_time | dateFormat}}</span>
        </p>

      </div>
    </div>
    <mt-button type="primary" plain size="large" @click="goDesc(goodsId)">图文详情</mt-button>
    <br>
    <mt-button type="danger" plain size="large" @click="goContent(goodsId)">商品评论</mt-button>

  </div>
</template>

<script type="${text/ecmascript-6}">
import Axios from "axios";
import mui from "../../../static/mui/js/mui.min.js";

export default {
  data() {
    return {
      goodsId: this.$route.params.id,
      loopImg: [],
      goodsInfo: {},
      goodsDetail: {},　
      ballFlag: false, //小球是否显示
    };
  },
  created() {
    this.getLoopImg()
    this.getGoodsInfo()
  },
  mounted() {
    this.getNumber()
  },
  methods: {
    getLoopImg() {// 获取轮播图数据
      Axios.get(
        `http://www.liulongbin.top:3005/api/getthumimages/${this.goodsId}`
      ).then(res => {
        if(res.data.status === 0) {
          this.loopImg = res.data.message
          console.log(this.loopImg)
        }
      })
    },
    
    getGoodsInfo() { // 获取商品价格、标题等
      Axios.get(
        `http://www.liulongbin.top:3005/api/goods/getinfo/${this.goodsId}`
      ).then(res => {
        if (res.data.status === 0) {
          this.goodsInfo = res.data.message[0];
          console.log(this.goodsInfo);
        }
      });
    },
    getNumber() {
      // 获取购买数量
      mui("#num")
        .numbox()
        .getValue();
    },
    setNumber() {
      // 设置购买数量
    },
    goDesc(id) {
      this.$router.push({
        name: 'goodsdesc',
        params:{id}
      })
    },
    goContent(id) {
      this.$router.push({name: 'goodscmt',params: {id}})
    },
    goShoppingCar() { // 购物车
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)"
    },
    enter(el,done) {
      el.offsetWidth
      el.style.transform = "translate(100px,216px)"
      el.style.transition = "all .6s cubic-bezier(.4,-0.3,1,.68)"
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag
    }
  }
};
</script>

<style lang="stylus" rel="${stylesheet/stylus}">
.goods-detail {
  padding: 6px 0px;

  .ball {
    width: 15px
    height 15px
    border-radius 50%
    background-color red
    position: absolute
    z-index 99
    left 137px
    top 420px

  }

  .mint-swipe {
  height: 300px;

  .mint-swipe-item {
    // background: red;

    .loop {
      height 100%
      width 100%
    }
  }
}

  .goods-buy {
    display: flex;
    flex-direction: column;
    padding: 6px 20px;

    .title {
      font-size: 20px;
      color: blue;
    }

    .price {
      .old {
        font-size: 14px;
        color: black;
        text-decoration: line-through;
        margin-right: 10px;
      }

      .new-desc {
        color: black;
      }

      .new-price {
        font-size: 16px;
        color: red;
      }
    }

    .number {
      font-size: 14px;
      color: black;
    }
  }
  .goods-desc {
    padding: 0 20px
    .info {
      .info-title {
          font-size 18px
      }
     
    }
    .desc {
      padding-top: 10px
    }
  }
}
</style>
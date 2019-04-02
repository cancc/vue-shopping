<template>
  <div class="goodslist">
    <div class="goods-item">
      <img src="../../assets/logo.png" alt="">
      <h1 class="title">这是描述信息这是描述信息这是描述信息这是描述信息</h1>
      <p class="price">
        <span class="new">￥1999</span>
        <span class="old">￥2999</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>已售123件</span>
      </p>
    </div>
    <div class="goods-item">
      <img src="../../assets/logo.png" alt="">
      <h1 class="title">信息这是描述信息这是描信息这是描信息这是描述信息这是描述信息</h1>
      <p class="price">
        <span class="new">￥1999</span>
        <span class="old">￥2999</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>已售123件</span>
      </p>
    </div>
    <div class="goods-item">
      <img src="../../assets/logo.png" alt="">
      <h1 class="title">这述信息这是描述信息这是描述信息这是描述信息</h1>
      <p class="price">
        <span class="new">￥1999</span>
        <span class="old">￥2999</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>已售123件</span>
      </p>
    </div>
  </div>
</template>

<script type="${text/ecmascript-6}">
export default {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    
  }
};
</script>

<style lang="stylus" scoped>
.goodslist {
  width 100%
  padding 0 10px
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
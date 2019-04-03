<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in loopPicture" :key="index">
        <img :src="item.img" class="loop">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <img src="../../assets/images/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goods">
          <img src="../../assets/images/menu2.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu3.png" alt>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png" alt>
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu5.png" alt>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png" alt>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Axios from "axios";
import { Toast, Indicator } from "mint-ui";

export default {
  data() {
    return {
      loopPicture: []
    };
  },
  created() {
    this.getLoop();
  },
  methods: {
    getLoop() {
      // 轮播图
      Indicator.open("图片加载中...");
      Axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
        if (res.data.status === 0) {
          // console.log(res.data)
          this.loopPicture = res.data.message;
          console.log(this.loopPicture);
          Indicator.close();
        } else {
          Toast("轮播图获取失败");
        }
      });
    },
    handleChange(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    // background: red;

    .loop {
      height 100%
      width 100%
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;

  .mui-table-view-cell {
    border: none;
    padding: 0;

    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
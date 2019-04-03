<template>
  <div class="desc">
    <h4 class="title">{{goodsDesc.title}}</h4>
    <div class="content" v-html="goodsDesc.content">

    </div>
  </div>
  </div>
</template>
// "<p>
// 	小米Note此次采用的5.7英寸夏普/JDI分辨率为1920X1080的屏幕。小米Note配置方面，CPU采用的是高通骁龙801四核2.5GHZ处理器，3GB的运行内存。
// </p>
// <p>
// 	4G双卡双待，1300万像素后置摄像头和400万前置摄像头组合，首次加入HiFi模块，高保真音质，电池容量为3000mAh。
// </p>
// <p>
// 	小米Note顶配版升级了CPU、屏幕、运行内存，采用的5.7英寸夏普/JDI分辨率为2560 x 1440的2K屏，CPU采用的是高通骁龙810八核64位处理器，4GB的运行内存。
// </p>
// <p align="center">
// 	<img class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/bbcimg/productDesc/descImg/201501/desc04/A0005143105/3851475.jpg" /> 
// </p>"
<script type="${text/ecmascript-6}">
import Axios from 'axios'
export default {
  data() {
    return {
      goodsId: this.$route.params.id,
      goodsDesc: {},
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc() {
      // 获取商品图文介绍
      Axios.get(
        `http://www.liulongbin.top:3005/api/goods/getdesc/${this.goodsId}`
      ).then(res => {
        if (res.data.status === 0) {
          this.goodsDesc = res.data.message[0];
          console.log(this.goodsDesc);
        }
      });
    },
  }
}
</script>

<style lang="stylus">
.desc {
  .title {}
  .content {
    img {
      width 100%
     
    }
  }
}
</style>
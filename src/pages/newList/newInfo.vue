<template>
  <div class="newInfo">
    <h1 class="title">{{newInfo.title}}</h1>
    <div class="title_header" v-show="flag">
      <span class="date">{{newInfo.add_time | dateFormat}}</span>
      <span>点击次数: {{newInfo.click}}</span>
    </div>
    <div v-html="newInfo.content">
    </div>
    <!-- 评论区域 -->
    <div v-show="flag">
      <comment></comment>
    </div>
    
    <!-- newInfo -- {{$route.params.id}} -->
  </div>
</template>

<script type="${text/ecmascript-6}">
import Axios from "axios";
import Comment from '../comment/comment'
import { Toast,Indicator } from "mint-ui";


export default {
  data() {
    return {
      newid: this.$route.params.id,
      newInfo: {},
      flag: false,
    };
  },
  created() {
    console.log(this.$route.params.id)
    this.getNewInfo()
  },
  methods: {
    getNewInfo() {
      Indicator.open("加载中...");
      Axios.get(`http://www.liulongbin.top:3005/api/getnew/${this.newid}`)
        .then(res => {
          if(res.data.status === 0) {
            this.newInfo = res.data.message[0]
            this.flag = true
            // console.log(this.newInfo)
            Indicator.close();
          }else {
            Toast({
            message: "轮播图获取失败",
            duration: 1000
          });
          }
        });
    }
  },
  components: {
    Comment
  }
};
</script>

<style lang="stylus" rel="${stylesheet/stylus}">
.newInfo {
  padding: 0 10px;

  .title {
    text-align: center;
    font-size: 20px;
    color: blue;
  }

  .title_header {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
<template>
  <div class="wrapper">
    <ul class="mui-table-view" v-for="(item, index) in NewList" :key="index">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">
                <span>发表时间：{{item.add_time | dateFormat}}</span>
                <span>点击数: <span>{{item.click}}次</span></span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
      <div></div>
  </div>
</template>

<script type="${text/ecmascript-6}">
import Axios from "axios";
import { Toast,Indicator } from "mint-ui";


  export default {
    data() {
      return {
        NewList: []
      }
    },
    created() {
      this.getNewList();
    },
    methods: {
      getNewList() {
        Indicator.open("加载中...");
        Axios.get("http://www.liulongbin.top:3005/api/getnewslist").then(res => {
          if(res.data.status === 0) {
            this.NewList = res.data.message
            console.log(this.NewList)
            Indicator.close();
          }else {
            Toast({
            message: "轮播图获取失败",
            duration: 1000
          });
          }
        })
      }
    }

  }
</script>

<style lang="stylus" rel="${stylesheet/stylus}">
.mui-media-body
  font-size 14px
.mui-ellipsis
  font-size 12px
  display flex
  justify-content space-between
</style>
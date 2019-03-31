<template>
  <div class="comment">
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入评论(最多100字)" maxlength="100" v-model="pushcmt"></textarea>
    <mt-button type="primary" size="large" @click="pushCmt">发表评论</mt-button>
    <!-- 评论展示区域 -->
    <div class="cmt" v-for="(item,index) in cmtlist" :key="index">
      <div class="comment-user">
        <span class="comment-title">第{{index+1}}楼 用户: {{item.user_name}}</span>
        <span class="comment-date">发表时间:{{item.add_time | dateFormat}}</span>
      </div>
      <div class="comment-body">{{item.content}}</div>
    </div>
    <mt-button type="danger" plain size="large" @click="cmtMore">加载更多</mt-button>
  </div>
</template>

<script type="${text/ecmascript-6}">
import Axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id, // 路由传递的id
      cmtlist: [], // 评论列表
      pageindex: 1, // 评论页码
      pushcmt: "",  // 发表评论
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      //获取评论内容
      Axios.get(
        `http://www.liulongbin.top:3005/api/getcomments/${this.id}?pageindex=${this.pageindex}`
      ).then(res => {
        if (res.data.status === 0) {
          let message = res.data.message;
          message.forEach(item => {
            this.cmtlist.push(item);
          });
          // this.cmtlist = res.data.message;
          console.log(this.cmtlist);
        }
      });
    },
    cmtMore() {
      // 加载更多
      this.pageindex = this.pageindex + 1;
      this.getComment();
    },
    pushCmt() {
      if (this.pushcmt) {
        Axios.post(// 提交评论信息
          `http://www.liulongbin.top:3005/api/postcomment/${this.id}`,
          {
            content: this.pushcmt
          }
        ).then(res => {
          if (res.data.status === 0) {
            this.cmtlist = []
            this.pageindex = 1
            this.getComment()
            this.pushcmt = ''
          }
        });
      }else {
        Toast('评论不能为空')
      }
    }
  }
};
</script>

<style lang="stylus" rel="${stylesheet/stylus}">
.comment {
  padding-bottom: 20px;

  .cmt {
    .comment-user {
      padding-top: 2px;
      display: flex;
      justify-content: space-between;
    }

    .comment-title {
      font-size: 14px;
    }

    .comment-date {
      font-size: 14px;
    }

    .comment-body {
      font-size: 14px;
      padding: 6px 20px;
      color: blue;
    }
  }
}
</style>
<template>
  <div class="app">
    <!-- 头部区域 -->
    <mt-header fixed title="vue 项目">
      <span slot="left" @click="back" v-show="backFlag">
        <mt-button icon="back">返回</mt-button>
      </span>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 中间路由区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部跳转区域 -->
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  data() {
    return {
      backFlag: false
    };
  },
  created() {
    this.refresh()
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    refresh() {
      if(this.$route.path == "/home") {
        this.backFlag = false
      }else {
        this.backFlag = true
      }
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal == "/home") {
        this.backFlag = false
      }else {
        this.backFlag = true
      }
    }
  },
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="${stylesheet/stylus}">
.app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;

  .v-enter, opacity 0 {
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active, .v-leave-active {
    transition: all 0.5s ease;
  }
}
</style>
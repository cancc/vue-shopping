<template>
  <div class="app">
    <!-- 头部区域 -->
    <mt-header fixed title="vue 项目"></mt-header>
    <!-- 中间路由区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部跳转区域 -->
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="${stylesheet/stylus}">
.app
  padding-top 40px
  overflow-x hidden
  .v-enter,
    opacity 0
    transform translateX(100%)
  .v-leave-to
    opacity 0
    transform translateX(-100%)
    position absolute
  .v-enter-active,
  .v-leave-active
    transition  all 0.5s ease
</style>
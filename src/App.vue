<template>
  <div class="app">
    <!-- 头部区域 -->
    <mt-header fixed title="vue 项目"></mt-header>
    <!-- 中间路由区域 -->
    <router-view></router-view>
    <!-- 底部跳转区域 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    <!-- <footer-guide></footer-guide> -->
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
</style>
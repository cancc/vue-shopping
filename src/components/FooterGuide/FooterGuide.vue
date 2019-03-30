<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/order">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/personal">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="${stylesheet/stylus}">

</style>
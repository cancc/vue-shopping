<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="my-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="my-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
      <router-link class="my-tab-item" to="/order">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="my-tab-item" to="/personal">
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
.mui-bar-tab .my-tab-item.mui-active {
  color: #007aff;
}

.mui-bar-tab .my-tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .my-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
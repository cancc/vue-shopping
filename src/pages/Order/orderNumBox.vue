<template>
 
  <p class="mui-numbox" id="num" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus"  type="button">-</button>
    <input class="mui-input-numbox" type="number" :value="count"
      ref="inputNum" @change="changeNum">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </p>
</template>

<script type="${text/ecmascript-6}">
import mui from "../../../static/mui/js/mui.min.js";

export default {
  props: ["count","goodsid"],
  data() {
    return {
    }
  },
  mounted () {
    mui('#num').numbox()
  },
  watch: {
   
  },
  methods: {
    changeNum() {
      this.$store.commit('updateCarTotal',{
        id: this.goodsid,
        count: parseInt(this.$refs.inputNum.value)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
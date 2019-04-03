<template>
  <p class="number">
        <span>购买数量:</span>
        <span class="mui-numbox" id="num" data-numbox-min='1' >
          <button class="mui-btn mui-btn-numbox-minus" ref="subtract" type="button">-</button>
          <input class="mui-input-numbox" type="number" value="1"
           ref="numInput" @change="numBoxChange">
          <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </span>
        {{$store.state.numBox}}
  </p>
</template>

<script type="${text/ecmascript-6}">
import mui from "../../../static/mui/js/mui.min.js";

export default {
  props: ["maxgoods"],
  data() {
    return {}
  },
  mounted () {
    mui('#num').numbox()
    console.log(this.maxgoods)
  },
  watch: {
    maxgoods: function(newValue,oldValue) {
      // console.log(newValue,oldValue)
      mui('#num').numbox().setOption('max',newValue)
    }
  },
  methods: {
    numBoxChange() {
      // console.log(this.$refs.numInput.value)
      this.$emit("getNum",this.$refs.numInput.value)
    },
    
  }
}
</script>

<style lang="stylus" scoped>
.number {
      font-size: 14px;
      color: black;
    }
</style>
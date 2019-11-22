<!--  -->
<template>
  <div class="addBox">
    <div @click="add">+</div>
    {{nums}}
    <div @click="dell">-</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //   nums: 10 data里面的值适合在本页面用
    }
  },
  props: ['nums'] /* 父组件传递过来的值 */,
  components: {},

  computed: {},

  mounted: {},

  methods: {
    add () {
      this.$emit('add')
    },
    dell () {
      this.$emit('dell')
    }
    // add () {
    // 适合组件本身的值
    //   this.nums++
    // },
    // de () {
    //   this.nums--
    // }
  }
}
</script>
<style lang='stylus' scoped>
.addBox
  display flex
  flex-direction row
  justify-content center
.addBox > div
  background #cccccc
  height 40px
  line-height 40px
  color #ffffff
  width 100px
</style>

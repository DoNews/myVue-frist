
<template>
  <div>
    <div>我是第{{this.$route.query.id}}个商品</div>
    <div>{{msg}}</div>
    <!-- tag="div"将rootlink标签从A标签改成固定标签 -->
    <router-link to='goodDetail/title'>点击查看嵌套路由标题</router-link>
    <router-link to="goodDetail/img">点击查看嵌套路由图片</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我的标题'
    }
  }
}
</script>
<style lang='stylus' scoped>
div
  color #000
</style>

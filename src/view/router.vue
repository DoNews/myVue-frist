<!--  -->
<template>
  <div>
    <h2>前端路由的优缺点</h2>
    <h3>优点：用户体验好，不需要每次从服务器获取。快速展现给客户</h3>
    <h3>
      缺点：
      <br />1：不利于SEO ，使用浏览器的前进和后退需要重新发送请求，没有和你利用缓存
      <br />2：单页面无法记住滚动的位置。返回和前进之后无法继续回到原来滚动的位置
      <br />
      <h2>路由类型</h2>
      <h2>
        1：动态路由匹配。path:'name/:id/user/:username' 传递id和用户名
        <br />2：嵌套路由 套着子节点。便于在当前页面随意切换子节点
        <br />3：编程式路由 this.$route.push({name:'path?id=123',query:{ username: names}}) <br/>this.$route.push({name:'ssss'})<br/>this.$route.push({path:'ssss',params:{name: username}})
        <br />4：命名路由和命名视图
      </h2>
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='stylus' scoped></style>

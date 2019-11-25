<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>routerLink跳转方式和点击跳转方式。</h1>
    <conter v-bind:nums="mynum" @add="fuadd" @dell="fudell"></conter>
    <!-- @子元素emit过来的方法 =后面是父组件的方法 -->
    <router-link class="flex" to="info">配置文件页面</router-link>
    <button @click="to('yufa')">基础语法页面</button>
    <button @click="to('router')">路由页面</button>
    <button @click="to('productList')">商品列表</button>
    <button @click="to('vueResource')">vueResource</button>
    <button @click="to('allList')">全部事件列表</button>
    <button @click="to('homePage')">大屏</button>
    <button @click="to('gojs')">gojs</button>
  </div>
</template>

<script>
import conter from './number'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mynum: 1
    }
  },
  components: {
    conter
  },
  methods: {
    to (msg) {
      this.$router.push({ path: '/' + msg })
      // this.$router.push({name: msg})
    },
    fuadd () {
      this.mynum++
    },
    fudell () {
      this.mynum--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.flex
  color #fff
  text-decoration none
  line-height 1
  display flex
  justify-content center
  align-items center
  .das
    color #000
button, a
  display block
  margin 20px auto
  height 50px
  width 148px
  border none
  outline none
  background green
  border-radius 5px
  color #fff
  font-size 22px
h1, h2
  font-weight normal
ul
  list-style-type none
  padding 0
li
  display inline-block
  margin 0 10px
a
  color #42b983
</style>

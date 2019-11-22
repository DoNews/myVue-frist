<!--  -->
<template>
  <div>
    <h2>语法配置页面</h2>
    <h4>mustache语法 :{{msg}}</h4>
    <h4>v-html :绑定html片段</h4>
    <h4>v-bind :绑定属性</h4>
    <h4>使用表式 :{{ true ? 'YES' : 'NO'}}</h4>
    <h4>v-text :文本赋值</h4>
    <h4>v-if = '条件'</h4>
    <h4>过滤器 :{{ money | moneyFormat()}}</h4>
    <div :class="{active: isActive, textError: hasError}">动态绑定类名</div>
    <div :style="{color: colorRed, fontSize: font + 'px'}">style绑定</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是mustache语法渲染的值',
      money: 100,
      hasError: true,
      isActive: false,
      colorRed: 'red',
      font: 26
    }
  },
  filters: {
    // 2. 局部过滤器
    moneyFormat (money) {
      return '$' + money + '.0'
    }
  }
}
</script>
<style lang='stylus' scoped>
.active
  color blue
.textError
  color red
#app
  font-size 22px
  font-weight bold !important
</style>

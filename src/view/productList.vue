<!--  -->
<template>
  <div class="Box">
    <div class="item" v-for="(item) in imgArr" :key="item.id" @click="toetail(item.id)">
      <img :src=item.name alt :id=item.id />
    </div>
  </div>
</template>

<script>
import img1 from '../assets/image/1.jpg'
import img2 from '../assets/image/2.jpg'
import img3 from '../assets/image/3.jpg'
import img4 from '../assets/image/4.jpg'
import img5 from '../assets/image/5.jpg'
import img6 from '../assets/image/6.jpg'
import img7 from '../assets/image/7.jpg'
import img8 from '../assets/image/8.jpg'
export default {
  data () {
    return {
      imgArr: [
        { name: img1, id: 1 },
        { name: img2, id: 2 },
        { name: img3, id: 3 },
        { name: img4, id: 4 },
        { name: img5, id: 5 },
        { name: img6, id: 6 },
        { name: img7, id: 7 },
        { name: img8, id: 8 }
      ]
    }
  },
  components: {},
  methods: {
    toetail (ids) {
      this.$router.push({
        name: 'goodDetail',
        query: {
          id: ids
        }
      })
      // this.$router.push({ path: '/goodDetail/' + id + '/user/'+ username }) 可以传递进来用户名，查看路由可以看多参数配置
    }
  }
}
</script>
<style lang='stylus' scoped>
// .Box
// display flex
// flex-direction row
// flex-wrap wrap
// justify-content space-around
// align-items center
// .item
// flex 0 0 300px
// height 380px
// overflow hidden
// img
// width 100%
// height 100%
.Box
  overflow auto
  .item
    float left
    float left
    width 22%
    margin 1.5%
    img
      width 100%
</style>

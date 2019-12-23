<!--  -->
<template>
  <div class="login">
    <div class="img">
      <img src="../assets/image/logo.gif" alt />
    </div>
    <div class="loginbox">
      <div class="item">
        <div>用户名</div>
        <div>
          <input type="text" placeholder="用户名" v-model="name" />
        </div>
      </div>
      <div class="item">
        <div>密码</div>
        <div>
          <input type="text" placeholder="密码" v-model="password" />
        </div>
      </div>
      <el-button @click.native="login" type="primary">{{btnText}}</el-button>
      <el-button @click.native="reset" type="primary">清空输入</el-button>
      <el-button @click.native="rember" type="primary">记住密码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      isLoading: false
    }
  },

  components: {},

  computed: {
    btnText () {
      if (this.isLoading) {
        return '登录中...'
      } else {
        return '登录'
      }
    }
  },
  created () {
    if (
      localStorage.getItem('name') &&
      localStorage.getItem('password')
    ) {
      this.name = localStorage.getItem('name')
      this.password = localStorage.getItem('password')
    }
  },
  mounted: {},

  methods: {
    reset () {
      this.name = ''
      this.password = ''
      this.$message.success('成功')
    },
    rember () {
      if (!this.name || !this.password) {
        this.$message.error('请输入用户名或者密码')
      } else {
        this.$message.success('记住密码')
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
      }
    },
    login () {
      if (!this.name) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
      if (this.password && this.name) {
        this.$message.success('登录成功')
        this.$router.push({ path: 'HelloWorld', query: {name: this.name} })
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.login
  background-color rgba(0, 43, 255, 0.3)
  height 100%
  width 100%
  .img>img
    width 100px
    border-radius 300px
    height 100px
    margin-top 100px
  .loginbox
    height 240px
    width 500px
    margin 50px auto
    background-color #ffffff
    color #000
    border-radius 10px
    .item
      height 80px
      line-height 80px
      display flex
      /* justify-content: center; */
      align-items center
      justify-content space-evenly
      input
        height 35px
        line-height 35px
        padding 0 10px
        border-radius 5px
        outline none
        border 1px solid #ccc
</style>

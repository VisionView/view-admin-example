<template>
  <div class="no-found">
    <el-card>
      <div class="error-desc">
        <h1 class="title">500</h1>
        <p class="text">500-对不起！内部服务器错误!</p>
        <p class="text"><span class="second">{{Second}}s</span>后将跳转至登录界面</p>
        
      </div>
      <img src="https://raw.githubusercontent.com/VisionView/YNNUZC/master/src/assets/img/404.png" alt="" class="error-img">
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Second: 5
    }
  },
  methods: {
    clearLogin () {
      let count = 5
      setTimeout(() => {
        // 清空登录信息
        window.localStorage.removeItem('token')
        // 跳转登录界面
        this.$router.push({path: '/login'})
      }, 5000);
    },
    showTime () {
      // 设置显示的时间
      let I = setInterval(() => {
        if (this.Second !==0) {
          this.Second -= 1
        }
      }, 1000);
    }
  },
  mounted () {
    this.clearLogin()
    this.showTime()
  }
}
</script>

<style lang="stylus" scoped>
.no-found
  position relative
  height 100%
  margin auto
  background #f9f9f9 !important
  .el-card
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    height 300px
    width 800px
    margin auto
    padding 60px 50px
    .error-desc
      float left
      width 360px
      .title
        text-shadow 20px 10px 10px #999
        font-size 72px
      .text
        margin-top 22px
        font-size 16px
        .second
          font-size 24px
          letter-spacing 2px
          color #f00
      .link
        margin-top 40px
    .error-img
      float right
      width 400px
</style>

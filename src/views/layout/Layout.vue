<template>
  <el-container>
    <sidebar :collapse="Collapse" />
    <el-container>
      <el-header>
        <div class="iconfont icon-menu" :class="Active" @click="menuClick"></div>
        <Bread-Crumb :BreadList="breads"/>
        <el-dropdown trigger="click">
          <div>
            <img src="@/assets/img/GeekFunicon.png" class="user-img" alt="user-img">
            <i class="el-icon-caret-bottom el-icon--right dropdown-icon"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置密码</el-dropdown-item>
            <el-dropdown-item>注 销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <app-main/>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from './components/sidebar'
import BreadCrumb from './components/breadcrumb'
import AppMain from './components/main'
export default {
  name: 'Home',
  components: {
    Sidebar,
    BreadCrumb,
    AppMain
  },
  data () {
    return {
      Collapse: false,
      isActive: false,
      breads: []

    }
  },
  methods: {
    menuClick () {
      this.Collapse = !this.Collapse
      this.isActive = !this.isActive
    }
  },
  computed: {
    Active () {
      return this.isActive ? 'rotateGo' : 'rotateBack'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/base.styl'
.el-header
  display flex
  .icon-menu
    width 40px
    line-height 40px
    margin 5px 0
    font-size 30px
    cursor pointer
    text-align center
  .rotateGo
    rotateA()
  .rotateBack
    rotateB()
  .el-breadcrumb
    flex 1
    margin-left 10px
    line-height 50px
  .el-dropdown
    width 80px
    cursor pointer
    .user-img
      float left
      height 36px
      width 36px
      margin 7px 0
    .dropdown-icon
      display inline-block
</style>

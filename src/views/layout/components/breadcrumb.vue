<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in BreadList" :key='index' v-if="item.meta.title" :to="{path: item.path}">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      BreadList: ''
    }
  },
  created () {
    this.getBread()
  },
  methods: {
    getBread () {
      this.BreadList = this.$route.matched
    }
  },
  watch: {
    $route () {
      this.getBread()
    }
  }
}
</script>

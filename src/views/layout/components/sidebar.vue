<template>
  <div class="aside">
    <el-menu :router="true" :collapse="collapse">
      <template v-for="(items, index) in routes">
        <el-submenu v-if="!items.hidden && items.children" :index="items.name" :key="index">
          <template slot="title">
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.title}}</span>
          </template>
          <template v-for="child in items.children">
              <el-menu-item v-if="child.hidden" :index="child.path" :key="child.path">{{child.meta.title}}</el-menu-item>
              <el-submenu v-else-if="child.children && !child.hidden" :index="child.path" :key="child.path">
                <span slot="title">{{child.meta.title}}</span>
                <el-menu-item v-for="third in child.children" :index="third.path" :key="third.name" v-if="!third.hidden">{{third.meta.title}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="child.path" :key="child.path">{{child.meta.title}}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    collapse: Boolean
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>

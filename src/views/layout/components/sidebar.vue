<template>
  <div class="aside">
    <el-menu :router="true" :collapse="collapse">
      <template v-for="(items, index) in $router.options.routes">
        <el-submenu v-if="items.children && !items.hidden" :index="items.name" :key="index">
          <template slot="title" >
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.title}}</span>
          </template>
          <el-menu-item v-for="(child,i) in items.children" :key="i" :index="child.path">
            {{ child.meta.title }}
          </el-menu-item>
        </el-submenu>
        <!-- <template v-else>
          <el-menu-item :index="items.path" :key="items.index">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.title}}</span>
          </el-menu-item>
        </template> -->
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  },
  props: {
    collapse: Boolean
  }
}
</script>
<style lang="stylus" scoped>

</style>

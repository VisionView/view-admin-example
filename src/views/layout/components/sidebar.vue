<template>
  <div class="aside">
    <el-menu :router="true" :collapse="collapse">
      <template v-for="items in Routers">
        <el-submenu v-if="items.children && items.children.length" :index="items.index" :key="items.index">
          <template slot="title" >
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.title}}</span>
          </template>
          <el-menu-item v-for="(child,i) in items.children" :key="i" :index="child.path">
            {{ child.meta.title }}
          </el-menu-item>
        </el-submenu>
        <template v-else>
          <el-menu-item :index="items.path" :key="items.index">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      Routers: [
        {
          index: '001',
          meta: {
            title: '导航一',
            icon: 'el-icon-sold-out'
          },
          children: [
            {
              path: 'demo1',
              meta: {
                title: 'Demo1'
              }
            },
            {
              path: 'demo2',
              meta: {
                title: 'Demo2'
              }
            },
            {
              path: 'demo4',
              meta: {
                title: 'Demo4'
              }
            }
          ]
        },
        {
          index: '003',
          meta: {
            title: '导航三',
            icon: 'el-icon-sold-out'
          },
          path: 'demo3'
        }
      ]
    }
  },
  props: {
    collapse: Boolean
  }
}
</script>
<style lang="stylus" scoped>

</style>

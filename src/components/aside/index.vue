<template>
  <el-menu :default-active="$route.path" :router="true">
    <el-submenu v-for="(item, index) in menu" :index="index+''" :key="item.title">
      <template slot="title">
        <i class="v-icon-menu" :class="item.icon"></i>
        {{item.title}}
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="it in item.child" :index="it.path" :key="it.title">{{it.title}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import menu from "./menu";
export default {
  data() {
    return {
      menu
    };
  },
  methods: {}
};
</script>
<style lang="stylus">
.el-menu {
  .v-icon-menu {
    font-size: 18px;
    vertical-align: top;
    margin-top: 19px;
  }
}
</style>



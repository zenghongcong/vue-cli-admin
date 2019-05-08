<template>
  <div>
    <el-menu :default-active="$route.path" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>导航一
        </template>
        <el-menu-item-group>
          <el-menu-item index="/some">选项1</el-menu-item>
          <el-menu-item index="/about">选项2</el-menu-item>
          <el-menu-item index="/mine">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>


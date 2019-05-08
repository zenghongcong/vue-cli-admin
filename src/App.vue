<template>
  <div id="app" v-loading.fullscreen.lock="$store.state.loading">
    <el-container style="height: 100%;">
      <el-header ref="header" height="48px">
        <div class="app">
          <i class="el-icon-s-home"></i>
          管理后台
        </div>
        <div class="handle">
          <p>您好，管理员</p>
          <a href="javascript:;">
            <i class="el-icon-switch-button"></i>
            退出
          </a>
        </div>
      </el-header>
      <el-container>
        <el-aside style="width: 200px;height: 100%;">
          <v-aside></v-aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import aside from "@/components/aside";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "v-aside": aside
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

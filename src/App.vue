<template>
  <div id="app" v-loading.fullscreen.lock="$store.state.loading">
    <el-container style="height: 100%;">
      <el-header height="48px">
        <v-header></v-header>
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
import header from "@/components/header";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "v-aside": aside,
    "v-header": header
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<template>
  <el-upload
    action
    multiple
    :limit="limit"
    :auto-upload="false"
    :on-change="updateFile"
    :on-exceed="exceed"
    list-type="type"
    :accept="accept"
  >
    <el-button type="primary">{{txt}}</el-button>
  </el-upload>
</template>
<script>
export default {
  //txt：按钮文案 limit: 文件数量 type: 预览列表类型 accept: 接收文件类型
  props: ["txt", "limit", "accept", "type"],
  name: "v-upload",
  methods: {
    updateFile(file) {
      this.$emit("update:file", file);
    },
    exceed(file) {
      let len = file.length;
      if (len > this.limit) {
        this.$message.error(`文件数不能超出${this.limit}个,请重新选择！`);
      }
    }
  }
};
</script>

